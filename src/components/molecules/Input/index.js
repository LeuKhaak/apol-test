import React from "react";
import * as styles from "./styles.module.scss";

const Input = ({ userId, el, ind, value, edit, saveRowDataForInput }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        id={userId + el[0]}
        name={el[0]}
        value={value}
        onChange={(event) => edit(ind, event)}
        onKeyPress={(event) => saveRowDataForInput(event, userId)}
      />
    </div>
  );
};

export default Input;
