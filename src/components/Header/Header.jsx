import React from "react";
import styles from "./Header.module.css";
import Logo from "../Logo";

const Header = () => (
  <div className={styles.header}>
    <a
      href="https://zeph.co"
      className={styles.logo}
      data-text="Mark Thomas Miller"
    >
      <Logo />
    </a>
  </div>
);

export default Header;
