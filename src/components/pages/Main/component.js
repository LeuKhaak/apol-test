import React from "react";
import * as styles from "./styles.module.scss";
import Table from "src/components/organisms/Table";
import Btn from "src/components/atoms/Btn";

function Main({ getStartData, addRow, type, filter, filterWord }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topWrapper}>
          <Btn btnText="Upload" btnStyle="upload" onClick={getStartData} />
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              name="filter"
              placeholder="filter users"
              value={filterWord}
              onChange={(event) => type(event)}
              onKeyPress={(event) => filter(event)}
            />
          </div>
        </div>
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
