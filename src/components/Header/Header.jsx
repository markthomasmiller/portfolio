import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

const Header = () => (
  <div className={styles.header}>
    <a href="https://zeph.co">
      <img src={logo} alt="logo" />
    </a>
    <a href="mailto:mark@mayvalellc.com">Contact</a>
  </div>
);

export default Header;
