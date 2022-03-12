import React from "react";
import CellContent from "src/components/atoms/CellContent";
import CellInput from "src/components/molecules/CellInput";
import * as styles from "./styles.module.scss";

function Cell({ content, cellStyle, mode, id, saveRowData }) {
  return (
    <div className={styles.cell}>
      <CellContent
        content={content}
        cellStyle={cellStyle}
        mode={mode}
        id={id}
      />
      <CellInput
        content={content}
        cellStyle={cellStyle}
        mode={mode}
        id={id}
        saveRowData={saveRowData}
      />
    </div>
  );
}

export default Cell;
