import React from "react";
import CellContent from "src/components/atoms/CellContent";
import * as styles from "./styles.module.scss";

function Cell({ content, cellStyle, mode, id }) {
  return (
    <div className={styles.cell}>
      <CellContent
        content={content}
        cellStyle={cellStyle}
        mode={mode}
        id={id}
      />
    </div>
  );
}

export default Cell;
