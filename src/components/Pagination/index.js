import React from "react";
import styles from "./style.module.scss";
import Dropdown from "../Dropdown";
import Button from "../Button";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { total = 0, page = 1, pageSize = 10 } = props;

  const totalPage = Math.ceil(total / pageSize);
  const arrTotalPage = Array.from({ length: totalPage }, (i, idx) => idx + 1); // idx ==> index of array ==> [1,2,3]

  return (
    <div className={styles["wrap-pagination"]}>
      <div className={styles["cover-select-amount-page"]}>
        <Dropdown label={pageSize} isShowBorder={true} />
        <span>
          Showing 1 - {pageSize} of {total}
        </span>
      </div>

      <div className={styles["cover-pagination"]}>
        <Button
          iconClassName={"i-group"}
          icon="icon-arrow-group-left"
          backgroundColor="#F8F8F8"
          width="28px"
        />

        <Button icon="icon-arrow-left" backgroundColor="#F8F8F8" width="28px" />

        {arrTotalPage?.map((item, index, totalArray) => {
          const pageActive = item === page;

          if (
            item <= 3 ||
            index === totalArray.length - 1 ||
            (item === 4 && totalArray.length >= 5)
          ) {
            if (item == 4 && totalArray.length >= 5) {
              return <Button label="..." width="28px" />;
            } else {
              return (
                <Button
                  className="pagination-number"
                  label={item}
                  backgroundColor={pageActive && "#0A6EE1"}
                  width="28px"
                  fontColor={pageActive ? "#ffffff" : "#3F434A"}
                />
              );
            }
          }
        })}

        <Button
          icon="icon-arrow-right"
          backgroundColor="rgba(10,110,225, 0.1)"
          iconColor="#0A6EE1"
          width="28px"
        />
        <Button
          iconClassName={"i-group"}
          icon="icon-arrow-group-right"
          backgroundColor="rgba(10,110,225, 0.1)"
          iconColor="#0A6EE1"
          width="28px"
        />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number,
  page: PropTypes.number,
  pageSize: PropTypes.number,
};

export default Pagination;
