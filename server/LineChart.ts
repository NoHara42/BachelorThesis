const D3Node = require('d3-node');
const d3n = new D3Node()      // initializes D3 with container element
const d3 = new D3Node().d3;

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/multi-line-chart
module.exports = class LineChart {
  data: any;
  xFunc: any;
  yFunc: any;
  zFunc: any;
  title: any;
  defined: any;
  curve: any;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  width: number;
  height: number;
  xType: any;
  xDomain: any;
  xRange: any;
  yFormat: any;
  yLabel: any;
  color: any;
  strokeLinecap: any;
  strokeLinejoin: any;
  strokeWidth: any;
  strokeOpacity: any;
  mixBlendMode: any;
  voronoi: any;
  d3array: any;
  yDomain: any;
  zDomain: any;
  yType: any;
  yRange: any;
  
  constructor(data, config) {
    this.data = data;
    this.xFunc = config.xFunc;
    this.yFunc = config.yFunc;
    this.zFunc = config.zFunc;
    this.title = config.title; // given d in data, returns the title text
    this.defined = config.defined; // for gaps in data
    this.curve = config.curve || d3.curveLinear; // method of interpolation between points
    this.marginTop = config.marginTop || 20; // top margin, in pixels
    this.marginRight = config.marginRight || 30; // right margin, in pixels
    this.marginBottom = config.marginBottom || 30; // bottom margin, in pixels
    this.marginLeft = config.marginLeft || 40; // left margin, in pixels
    this.width = config.width || 640; // outer width, in pixels
    this.height = config.height || 400; // outer height, in pixels
    this.xType = config.xtype || d3.scaleUtc; // type of x-scale
    this.xDomain = config.xDomain; // [xmin, xmax]
    this.xRange = config.xRange || [this.marginLeft, this.width - this.marginRight]; // [left, right]
    this.yType = config.yType || d3.scaleLinear; // type of y-scale
    this.yDomain = config.yDomain; // [ymin, ymax]
    this.yRange = config.yRange || [this.height - this.marginBottom, this.marginTop]; // [bottom, top]
    this.yFormat = config.yFormat; // a format specifier string for the y-axis
    this.yLabel = config.yLabel; // a label for the y-axis
    this.zDomain = config.zDomain; // array of z-values
    this.color = config.color || "currentColor"; // stroke color of line, as a constant or a function of *z*
    this.strokeLinecap = config.strokeLinecap; // stroke line cap of line
    this.strokeLinejoin = config.strokeLinejoin; // stroke line join of line
    this.strokeWidth = config.strokeWidth || 1.5; // stroke width of line
    this.strokeOpacity = config.strokeOpacity; // stroke opacity of line
    this.mixBlendMode = config.mixBlendMode || "multiply"; // blend mode of lines
    this.voronoi = config.voronoi || false; // show a Voronoi overlay? (for debugging)

  }

  compute() {
    // Compute values.
    const X = d3.map(this.data, this.xFunc);
    const Y = d3.map(this.data, this.yFunc);
    const Z = d3.map(this.data, this.zFunc);
    const O = d3.map(this.data, d => d);
    if (this.defined === undefined) this.defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
    const D = d3.map(this.data, this.defined);
    
    // Compute default domains, and unique the z-domain.
    if (this.xDomain === undefined) this.xDomain = d3.extent(X);
    if (this.yDomain === undefined) this.yDomain = [0, d3.max(Y, d => typeof d === "string" ? +d : d)];
    if (this.zDomain === undefined) this.zDomain = Z;
    import('d3-array').then((d3array) => {
      this.zDomain = new d3array.InternSet(Object.entries(this.zDomain));
      // Omit any data not present in the z-domain.
      const I = d3.range(X.length).filter(i => this.zDomain.has(Z[i]));

      // Construct scales and axes.
      const xScale = this.xType(this.xDomain, this.xRange);
      const yScale = this.yType(this.yDomain, this.yRange);
      const xAxis = d3.axisBottom(xScale).ticks(this.width / 80).tickSizeOuter(0);
      const yAxis = d3.axisLeft(yScale).ticks(this.height / 60, this.yFormat);

      // Compute titles.
      const T = this.title === undefined ? Z : this.title === null ? null : d3.map(this.data, this.title);

      // Construct a line generator.
      const line = d3.line()
          .defined(i => D[i])
          .curve(this.curve)
          .x(i => xScale(X[i]))
          .y(i => yScale(Y[i]));

      const svg = d3n.createSVG(this.width, this.height)
          .attr("viewBox", [0, 0, this.width, this.height])
          .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
          .style("-webkit-tap-highlight-color", "transparent")
          .on("pointerenter", pointerentered)
          .on("pointermove", pointermoved)
          .on("pointerleave", pointerleft)
          .on("touchstart", event => event.preventDefault());

      // An optional Voronoi display (for fun).
      if (this.voronoi) svg.append("path")
          .attr("fill", "none")
          .attr("stroke", "#ccc")
          .attr("d", d3.Delaunay
            .from(I, i => xScale(X[i]), i => yScale(Y[i]))
            .voronoi([0, 0, this.width, this.height])
            .render());

      svg.append("g")
          .attr("transform", `translate(0,${this.height - this.marginBottom})`)
          .call(xAxis);

      svg.append("g")
          .attr("transform", `translate(${this.marginLeft},0)`)
          .call(yAxis)
          .call(g => g.select(".domain").remove())
          .call(this.voronoi ? () => {} : g => g.selectAll(".tick line").clone()
              .attr("x2", this.width - this.marginLeft - this.marginRight)
              .attr("stroke-opacity", 0.1))
          .call(g => g.append("text")
              .attr("x", -this.marginLeft)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(this.yLabel));

      const path = svg.append("g")
          .attr("fill", "none")
          .attr("stroke", typeof this.color === "string" ? this.color : null)
          .attr("stroke-linecap", this.strokeLinecap)
          .attr("stroke-linejoin", this.strokeLinejoin)
          .attr("stroke-width", this.strokeWidth)
          .attr("stroke-opacity", this.strokeOpacity)
          .selectAll("path")
          .data(d3array.group(I, i => Z[i]))
          .join("path")
            .style("mix-blend-mode", this.mixBlendMode)
            .attr("stroke", typeof this.color === "function" ? ([z]) => this.color(z) : null)
            .attr("d", ([, I]) => line(I));

      const dot = svg.append("g").attr("display", "none");

      dot.append("circle")
          .attr("r", 2.5);

      dot.append("text")
          .attr("font-family", "sans-serif")
          .attr("font-size", 10)
          .attr("text-anchor", "middle")
          .attr("y", -8);

      function pointermoved(event) {
        const [xm, ym] = d3.pointer(event);
        const i = d3.least(I, i => Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)); // closest point
        path.style("stroke", ([z]) => Z[i] === z ? null : "#ddd").filter(([z]) => Z[i] === z).raise();
        dot.attr("transform", `translate(${xScale(X[i])},${yScale(Y[i])})`);
        if (T) dot.select("text").text(T[i]);
        svg.property("value", O[i]).dispatch("input", {bubbles: true});
      }

      function pointerentered() {
        path.style("mix-blend-mode", null).style("stroke", "#ddd");
        dot.attr("display", null);
      }

      function pointerleft() {
        path.style("mix-blend-mode", "multiply").style("stroke", null);
        dot.attr("display", "none");
        svg.node().value = null;
        svg.dispatch("input", {bubbles: true});
      }
    });
    return d3n.svgString();
  }
}
