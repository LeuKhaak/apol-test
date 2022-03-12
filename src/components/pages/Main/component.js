import React from "react";
import * as styles from "./styles.module.scss";
import Table from "src/components/organisms/Table";
import Btn from "src/components/atoms/Btn";

function Main({ getStartData, addRow }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Btn btnText="Upload" btnStyle="upload" onClick={getStartData} />
        <Table />
        <div className={styles.btnWrapper}>
          <Btn btnText="Submit" btnStyle="submit" />
          <Btn btnText="Export" btnStyle="export" />
          <Btn btnText="Add" btnStyle="add" onClick={addRow} />
        </div>
      </div>
    </section>
  );
}

export default Main;
