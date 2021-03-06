import React from "react";
import styles from "./NavigationArrow.module.css";
import cx from "classnames";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const NavigationArrow = ({ direction, onClick }) => (
  <div className={cx(styles[direction], styles.arrow)}>
    <div className={cx(styles.buttonContainer)}>
      <button className={styles.button} onClick={onClick}>
        {direction === "left" ? <FiChevronLeft /> : <FiChevronRight />}
      </button>
    </div>
  </div>
);

export default NavigationArrow;
