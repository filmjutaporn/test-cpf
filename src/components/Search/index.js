import React from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

const Search = (props) => {
  const {
    placeholder = "",
    isShowFilter = false,
    handleSearch = null,
    isShowClearSearch = false,
    handleClearSearch = null,
    value = "",
    handleChange = null,
  } = props;

  return (
    <div className={styles["wrap-search"]}>
      <i className={`${styles["i-search"]} icon-search`} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleSearch(e)}
        value={value}
      />
      {isShowClearSearch && (
        <i
          className={`${styles["i-close"]} icon-cancel-circle`}
          onClick={() => handleClearSearch()}
        />
      )}
      {isShowFilter && <i className={`${styles["i-filter"]} icon-filter`} />}
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  isShowFilter: PropTypes.bool,
  handleSearch: PropTypes.func,
  isShowClearSearch: PropTypes.bool,
  handleClearSearch: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Search;
