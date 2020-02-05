import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => (
  <div className={styles.introduction}>
    <h1>Selected work</h1>
    <p>
      I'm Mark Thomas Miller, a{" "}
      <span className={styles.highlight}>
        frontend engineer and UI/UX designer
      </span>
      . I strive not only to create beautiful, cohesive products, but also to
      make them profitable for businesses. This is some of my previous work.
    </p>
  </div>
);

export default Introduction;
