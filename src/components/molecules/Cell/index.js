import React from "react";
import CellContent from "../../molecules/CellContent";
import * as styles from "./styles.module.scss";

function Cell({ content, cellStyle, cellContentStyle, mode, id }) {
  return (
    <div
      className={styles.cell}
      style={{
        height: cellStyle === "cellTitleActions" ? "calc(100% - 1.2rem)" : "",
      }}
    >
      <CellContent
        content={content}
        cellStyle={cellStyle}
        cellContentStyle={cellContentStyle}
        mode={mode}
        id={id}
      />
    </div>
  );
}

export default Cell;
