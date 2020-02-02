import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => (
  <div className={styles.introduction}>
    <div className={styles.left}>
      <h1>Selected work</h1>
      <p>
        I'm Mark, a <span className={styles.highlight}>React engineer</span> and{" "}
        <span className={styles.highlight}>UI/UX designer</span>. I strive not
        only to create beautiful, cohesive products, but also to make them
        profitable for businesses. This is some of my previous work.
      </p>
      <div className={styles.line} />
    </div>
  </div>
);

export default Introduction;
