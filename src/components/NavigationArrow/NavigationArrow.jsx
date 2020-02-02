import React from "react";
import styles from "./NavigationArrow.module.css";
import cx from "classnames";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const NavigationArrow = ({ direction, onClick }) => (
  <div onClick={onClick} className={cx(styles[direction], styles.arrow)}>
    <div className={cx(styles.buttonContainer)}>
      <div className={styles.button}>
        {direction === "left" ? <FiChevronLeft /> : <FiChevronRight />}
      </div>
    </div>
  </div>
);

export default NavigationArrow;
