import React from "react";
import * as styles from "./styles.module.scss";
import cn from "classnames";

function CellContent({ content, cellStyle, id }) {
  const classCell = cn(styles.cell, styles[cellStyle]);
  return (
    <div className={classCell} id={id}>
      {content}
      <span
        className={styles.cellSimbol}
        style={{ display: cellStyle === "simbol" ? "block" : "" }}
      >
        &#8595;
      </span>
    </div>
  );
}

export default CellContent;
