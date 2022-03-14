import React from "react";
import * as styles from "./styles.module.scss";
import cn from "classnames";

const Btn = ({
  btnText,
  icon,
  btnStyle,
  type,
  color,
  onClick,
  arg,
  arg2,
  id,
}) => {
  const classBtn = cn(
    styles.btn,
    styles[btnStyle],
    styles[color],
    styles[type]
  );
  const onClick1 = () => {
    if (onClick) onClick(arg, arg2);
  };
  return (
    <button
      className={classBtn}
      id={id}
      onClick={() => {
        onClick1();
      }}
    >
      <span className={styles.linkText}>{btnText}</span>
    </button>
  );
};

export default Btn;
