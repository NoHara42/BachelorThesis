//@ts-nocheck
import * as d3 from 'd3';
import { requestWorkFreq } from '..';

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/multi-line-chart

export default function LineChart(
  config,
  context,
  outletSelectionString,
  data,
  {
    x = (x) => x, // given d in data, returns the (temporal) x-value
    y = (y) => y, // given d in data, returns the (quantitative) y-value
    z = (z) => z, // given d in data, returns the (categorical) z-value
    title = undefined, // given d in data, returns the title text
    defined = undefined, // for gaps in data
    curve = undefined, // method of interpolation between points
    marginTop = 60, // top margin, in pixels
    marginRight = 60, // right margin, in pixels
    marginBottom = 60, // bottom margin, in pixels
    marginLeft = 60, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    xType = undefined, // type of x-scale
    xDomain = undefined, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = undefined, // type of y-scale
    yDomain = undefined, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    yFormat = undefined, // a format specifier string for the y-axis
    yLabel = undefined, // a label for the y-axis
    zDomain = undefined, // array of z-values
    color = undefined, // stroke color of line, as a constant or a function of *z*
    strokeLinecap = undefined, // stroke line cap of line
    strokeLinejoin = undefined, // stroke line join of line
    strokeWidth = 1.5, // stroke width of line
    strokeOpacity = undefined, // stroke opacity of line
    mixBlendMode = "multiply", // blend mode of lines
  } = {}
) {
  let outlet = d3.select(window.document).select(outletSelectionString ?? "#outlet");
  xType = xType ?? d3.scaleUtc;
  yType = yType ?? d3.scaleLinear;
  curve = curve ?? d3.curveLinear;
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const Z = d3.map(data, z);
  const zUnique = Array.from(new Set(Z));
  const O = d3.map(data, (d) => d);

  
  color = d3.scaleOrdinal()
  .domain(zUnique)
  .range(d3.schemeSet2)

  if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);

  const D = d3.map(data, defined);

  // Compute default domains, and unique the z-domain.
  if (xDomain === undefined) xDomain = d3.extent(X);
  if (yDomain === undefined)
    yDomain = [0, d3.max(Y, (d) => (typeof d === "string" ? +d : d))];
  if (zDomain === undefined) zDomain = Z;
  zDomain = new d3.InternSet(zDomain);

  // Omit any data not present in the z-domain.
  const I = d3.range(X.length).filter((i) => zDomain.has(Z[i]));

  // Construct scales and axes.
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3
    .axisBottom(xScale)
    .ticks(width / 80)
    .tickSizeOuter(0);

  const yAxis = d3.axisLeft(yScale).ticks(height / 60, yFormat);

  // Compute titles.
  const T =
    title === undefined ? Z : title === null ? null : d3.map(data, title);

  // Construct a line generator.
  const line = d3
    .line()
    .defined((i) => {
      return D[i];
    })
    .curve(curve)
    .x((i) => xScale(X[i]))
    .y((i) => yScale(Y[i]));

    
  const svg = outlet
    .html("")
    .insert("svg")
    .attr("id", "viz-container")
    .attr("viewBox", [0, 0, width, height])
    .style("-webkit-tap-highlight-color", "transparent")
    .on("pointerenter", pointerentered)
    .on("pointermove", pointermoved)
    .on("pointerleave", pointerleft)
    .on("click", handleClick)
    .on("touchstart", (event) => event.preventDefault());

// Add one dot in the legend for each name.
svg.selectAll("mydots")
  .data(zUnique)
  .enter()
  .append("circle")
    .attr("cx", 100)
    .attr("cy", function(d,i){ return 100 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7)
    .style("fill", function(d){ return color(d)})

// Add one dot in the legend for each name.
svg.selectAll("mylabels")
  .data(zUnique)
  .enter()
  .append("text")
    .attr("x", 120)
    .attr("y", function(d,i){ return 100 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function(d){ return color(d)})
    .text(function(d){ return d})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")

  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(xAxis);

  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(yAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .append("text")
        .attr("x", -marginLeft)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text(yLabel)
    );
  
  const path = svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke", typeof color === "string" ? color : null)
    .attr("stroke-linecap", strokeLinecap)
    .attr("stroke-linejoin", strokeLinejoin)
    .attr("stroke-width", strokeWidth)
    .attr("stroke-opacity", strokeOpacity)
    .selectAll("path")
    .data(d3.group(I, (i) => Z[i]))
    .join("path")
    .style("mix-blend-mode", mixBlendMode)
    .attr("stroke", typeof color === "function" ? ([z]) => color(z) : null)
    .attr("d", ([, I]) => line(I));

  const dot = svg.append("g").attr("display", "none").style("cursor", "pointer");
  const xLine = svg.append("line").attr("display", "none");
  const yLine = svg.append("line").attr("display", "none");

  dot.append("circle").attr("r", 10).attr("class", "animate-pulse").style("fill","#4ade80");

  dot
    .append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "middle")
    .attr("y", -8);
  

  function handleClick(event) {
    const [xm, ym] = d3.pointer(event);
    const i = d3.least(I, (i) =>
      Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)
    );
    //request data for year and label to fill right sidenav with
    const year: number = (new Date(X[i]) as Date)?.toLocaleString("de-DE", {year: "numeric"});
    const label: string = T[i];
    
    requestWorkFreq({year,label}, config, context);
  }

  function pointermoved(event) {    
    const [xm, ym] = d3.pointer(event);
    const i = d3.least(I, (i) =>
      Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)
    );

    // closest point
    path
      .style("stroke", ([z]) => (Z[i] === z ? null : "#ddd"))
      .filter(([z]) => Z[i] === z)
      .raise();
    dot.attr("transform", `translate(${xScale(X[i]) ?? 0},${yScale(Y[i]) ?? 0})`);
    if (T) dot.select("text").text(`${T[i]}, relLitImportance: ${Y[i]}, Year: ${X[i]?.toLocaleString("de-DE", {year: "numeric"})}`);

    xLine
    .style("stroke", "red")
    .style("opacity", "25%")  // colour the line
    .attr("x1", xScale(X[i]))     // x position of the first end of the line
    .attr("y1", d3.max(Y))                // y position of the first end of the line
    .attr("x2", xScale(X[i]))     // x position of the second end of the line
    .attr("y2", yScale(Y[i]));    // y position of the second end of the line

    yLine
    .style("stroke", "blue")  // colour the line
    .style("opacity", "25%")  // colour the line
    .attr("x1", 0)     // x position of the first end of the line
    .attr("y1", yScale(Y[i]))      // y position of the first end of the line
    .attr("x2", xScale(X[i]))     // x position of the second end of the line
    .attr("y2", yScale(Y[i]));    // y position of the second end of the line

    svg.property("value", O[i]).dispatch("input", { bubbles: true });
  }

  function pointerentered() {
    path.style("mix-blend-mode", null).style("stroke", "#ddd");
    dot.attr("display", null);
    xLine.attr("display", null);
    yLine.attr("display", null);

  }

  function pointerleft() {
    path.style("mix-blend-mode", mixBlendMode).style("stroke", null);
    dot.attr("display", "none");
    xLine.attr("display", "none");
    yLine.attr("display", "none");
    svg.node().value = null;
    svg.dispatch("input", { bubbles: true });
  }
}
