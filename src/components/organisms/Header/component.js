import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles.module.scss";
import Btn from "../../../components/atoms/Btn";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <Btn btnText="Home" btnStyle="nav" />
        </Link>
        <Link to="/settings" className={styles.link}>
          <Btn btnText="Settings" btnStyle="nav" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
