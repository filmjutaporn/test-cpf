import React from "react";
import "./style.scss";
import Dropdown from "../Dropdown";
import Button from "../Button";

const Pagination = () => {
  return (
    <div className="wrap-pagination">
      <div className="cover-select-amount-page">
        <Dropdown label="10" isShowBorder={true} />
        <span>Showing 1 - 10 of 100</span>
      </div>

      <div className="cover-pagination">
        <Button icon="icon-arrow-group-left" backgroundColor="#F8F8F8" width="28px"/>
        <Button icon="icon-arrow-left" backgroundColor="#F8F8F8" width="28px"/>
        <Button label="1" backgroundColor="#0A6EE1" width="28px" fontColor="#ffffff"/>
        <Button label="2" width="28px"/>
        <Button label="3" width="28px" />
        <Button label="..." width="28px"/>
        <Button label="5" width="28px"/>
        <Button icon="icon-arrow-right" backgroundColor="rgba(10,110,225, 0.1)" iconColor="#0A6EE1" width="28px" />
        <Button icon="icon-arrow-group-right" backgroundColor="rgba(10,110,225, 0.1)" iconColor="#0A6EE1" width="28px" />
      </div>
    </div>
  );
};

export default Pagination;
