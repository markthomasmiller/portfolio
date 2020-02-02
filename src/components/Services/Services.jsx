import React from "react";
import styles from "./Services.module.css";

const Services = () => (
  <div className={styles.services}>
    <div className={styles.content}>
      <h2>I can help you with...</h2>
      <h3>Development</h3>
      <ul>
        <li>Skillname</li>
        <li>Skillname</li>
        <li>Skillname</li>
        <li>Skillname</li>
        <li>Skillname</li>
      </ul>
      <h3>Design</h3>
      <ul>
        <li>Skillname</li>
        <li>Skillname</li>
        <li>Skillname</li>
        <li>Skillname</li>
        <li>Skillname</li>
      </ul>
    </div>
  </div>
);

export default Services;
