import React from "react";
import "./style.scss";
import Badge from "../Badge";
import Checkbox from "../Checkbox";

const Table = () => {
  const tableHeader = [
    <Checkbox />,
    "Product name",
    "Product No.",
    "Category",
    "Date",
    "Price",
    "Status",
    "",
  ];

  return (
    <div className="wrap-table ">
      <div className="cover-table-header">
        {tableHeader.map((item, index) => (
          <div key={index} className="cursor-pointer">
            <span>{item}</span>
            <i className="icon-arrow-down-solid" />
          </div>
        ))}
      </div>

      {[...Array(8)].map((item, index) => (
        <div className="cover-body-table">
          <div className="cell">
            <Checkbox />
          </div>
          <div className="cell">
            <span>MacBook Pro 15 Retina Touch Bar MV902</span>
          </div>
          <div className="cell">
            <span>#790841</span>
          </div>
          <div className="cell">
            <span>Notebook</span>
          </div>
          <div className="cell">
            <span>12.09.20</span>
          </div>
          <div className="cell">
            <span>$2.500</span>
          </div>
          <div className="cell">
            <Badge
              label="Disable"
              fontColor="#07A721"
              backgroundColor="rgba(32,161,68, 0.1)"
            />
          </div>
          <div className="cell">
            <i className="icon-more" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
