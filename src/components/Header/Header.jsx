import React from "react";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.header}>
    <a href="https://zeph.co">(Mark signature)</a>
    <a href="mailto:mark@mayvalellc.com">Contact</a>
  </div>
);

export default Header;
