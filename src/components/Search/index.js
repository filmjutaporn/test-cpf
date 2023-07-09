import React, { useState } from "react";
import "./style.scss";

const Search = (props) => {
  const { placeholder = "", isShowFilter = false } = props;
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div className="wrap-search">
      <i className="icon-search" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        value={value}
      />
      {isShowFilter && <i className=" icon-filter" />}
    </div>
  );
};

export default Search;
