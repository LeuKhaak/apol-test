import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles.module.scss";
import Btn from "../../../components/atoms/Btn";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <Btn btnText="Table" btnStyle="nav" />
        </Link>
        <Link to="/map" className={styles.link}>
          <Btn btnText="Map" btnStyle="nav" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
