import React from "react";
import * as styles from "./styles.module.scss";
import cn from "classnames";

const Btn = ({ btnText, btnStyle, type, onClick, arg, arg2, id }) => {
  const classBtn = cn(styles.btn, styles[btnStyle], styles[type]);

  const onClickFunc = () => {
    if (onClick) onClick(arg, arg2);
  };

  return (
    <button
      className={classBtn}
      id={id}
      onClick={() => {
        onClickFunc();
      }}
    >
      <span className={styles.linkText}>{btnText}</span>
    </button>
  );
};

export default Btn;
