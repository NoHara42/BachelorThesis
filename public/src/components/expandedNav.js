import { useContext } from "react";
import { GlobalContext } from "../app";
import { SelectSearch, RangeSlider, ConfigLoader } from "./exports";

function ExpandedNav(props) {
  const authorSelectConfig = {
    defaultOptions: true,
    isMulti: true,
    tabIndex: 0,
  };

  const id = props.id;

  const globalData = useContext(GlobalContext);

  return (
    <>
      <div>
        <h5>Configure filtering for: "{props.label}"</h5>
        <div className="divider"></div>
        <label className="italic text-xs">
          Filter by author(s)...
          <SelectSearch
            valueFunc={(dataValue) => dataValue.authorY}
            labelFunc={(dataValue) => dataValue.authorY}
            renameLabelFunc={(dataValue) => dataValue.authorY}
            data={globalData.allAuthors}
            config={authorSelectConfig}
          ></SelectSearch>
        </label>
      </div>
        <div className="flex flex-col md:flex-row justify-evenly grow my-4">
          <table className="w-full">
            <thead>
              <tr>
                <th>Author</th>
              </tr>
            </thead>
            <ConfigLoader tableName="Author"></ConfigLoader>
          </table>
          <div className="divider divider-vertical md:divider-horizontal"></div>
          <table className="w-full">
            <thead>
              <tr>
                <th>Works</th>
              </tr>
            </thead>
            <ConfigLoader tableName="Work"></ConfigLoader>
          </table>
        </div>
      <div className="italic text-xs mb-5 mx-2">
        Works published between the years... (inclusive)
        <RangeSlider></RangeSlider>
      </div>
    </>
  );
}

export default ExpandedNav;
