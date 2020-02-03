import React from "react";
import styles from "./Service.module.css";
import cx from "classnames";

const Service = ({ text, icon, color, top }) => (
  <li className={cx(styles.service, { [styles.bold]: top })}>
    <span style={{ color }} className={styles.iconContainer}>
      {icon}
    </span>
    {text}
    {top && <span className={styles.top}>Top Skill</span>}
  </li>
);

export default Service;
