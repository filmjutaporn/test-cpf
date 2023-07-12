import React from "react";
import styles from "./style.module.scss";
import Badge from "../Badge";
import Checkbox from "../Checkbox";
import moment from "moment";
import PropTypes from "prop-types";

const Table = (props) => {
  const { tableHeader = [], tableBody = [] } = props;

  const TableCell = ({ children }) => {
    return <div className={styles.cell}>{children}</div>;
  };

  return (
    <div className={styles["wrap-table"]}>
      <div className={styles["cover-table-header"]}>
        {tableHeader.map((item, index) => (
          <div key={index} className="cursor-pointer">
            <span>{item}</span>
            <i className={`icon-arrow-down-solid ${styles["icon-sort"]}`} />
          </div>
        ))}
      </div>

      {tableBody.length > 0 ? (
        tableBody.map((item, index) => (
          <div className={styles["cover-body-table"]} key={index}>
            <TableCell>
              <Checkbox />
            </TableCell>

            <TableCell>
              <span>{item?.name}</span>
            </TableCell>

            <TableCell>
              <span>#{item?.number}</span>
            </TableCell>

            <TableCell>
              <span>{item?.category}</span>
            </TableCell>

            <TableCell>
              <span>{moment(item?.updateAt).format("DD.MM.YY")}</span>
            </TableCell>

            <TableCell>
              <span>${Number(item?.price)}</span>
            </TableCell>

            <TableCell>
              <Badge
                label={item?.status}
                fontColor={item?.status === "available" ? "#07A721" : "#D92D20"}
                backgroundColor={
                  item?.status === "available"
                    ? "rgba(32,161,68, 0.1)"
                    : "rgba(217,45,32, 0.1)"
                }
              />
            </TableCell>

            <TableCell>
              <i className="icon-more" />
            </TableCell>
          </div>
        ))
      ) : (
        <div className={styles["table-empty"]}>No Data</div>
      )}
    </div>
  );
};

Table.propTypes = {
  tableBody: PropTypes.array,
  tableHeader: PropTypes.array,
};

export default Table;
