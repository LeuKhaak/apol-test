import { React, useState } from "react";
import * as styles from "./styles.module.scss";
import cn from "classnames";

function CellInput({ content, cellStyle, mode, id, saveRowData }) {
  const classInputWrapper = cn(styles.input, styles[cellStyle]);

  const [value, setValue] = useState(content);

  const edite = (event) => {
    setValue(event.target.value);
  };
  return (
    <div
      className={classInputWrapper}
      style={{ display: mode === "edite" ? "block" : "" }}
    >
      <input
        name={id}
        value={value}
        style={{ display: cellStyle ? "none" : "" }}
        onChange={(event) => edite(event)}
        onKeyPress={(event) => saveRowData(event, id, event.target.value)}
      />
    </div>
  );
} //onChange={(event) => handleChange(event)}

export default CellInput;
