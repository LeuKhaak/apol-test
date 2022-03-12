import React from "react";
import * as styles from "./styles.module.scss";
import cn from "classnames";

function CellContent({ content, cellStyle, mode, id }) {
  const classCell = cn(styles.cell, styles[cellStyle]);
  return (
    <div
      className={classCell}
      style={{ display: mode === "edite" ? "none" : "" }}
      id={id}
    >
      {content}
    </div>
  );
}

export default CellContent;
