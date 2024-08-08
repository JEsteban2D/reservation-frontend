import React from "react";
import styles from "./TablesDraw.module.css";

const TablesDraw = () => {
  return (
    <div>
      {/* <div className={styles.tableContainer}>
        <div className={styles.chair}></div>
        <div className={styles.table}></div>
        <div className={styles.chair}></div>
      </div> */}
    <div className={styles.tableContainer}>
      <div className={styles.chair + ' ' + styles.chairTop}></div>
      <div className={styles.chair + ' ' + styles.chairBottom}></div>
      <div className={styles.chair + ' ' + styles.chairLeft}></div>
      <div className={styles.chair + ' ' + styles.chairRight}></div>
      <div className={styles.table}></div>
    </div>
    </div>
  );
};

export default TablesDraw;
