import React from "react";
import * as styles from "./styles.module.scss";
import cn from "classnames";

function CellContent({ content, cellStyle, id }) {
  const classCell = cn(styles.cell, styles[cellStyle]);
  return (
    <div className={classCell} id={id}>
      {content}
    </div>
  );
}

export default CellContent;
