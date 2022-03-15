import React from "react";
import CellContent from "src/components/molecules/CellContent";
import * as styles from "./styles.module.scss";

function Cell({ content, cellStyle, mode, id }) {
  return (
    <div
      className={styles.cell}
      style={{
        height: cellStyle === "cellTitleActions" ? "calc(100% - 1.1rem)" : "",
      }}
    >
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
