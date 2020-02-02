import React from "react";
import styles from "./Skills.module.css";

const Skills = ({ skills }) => (
  <ul className={styles.skills}>
    {skills.map((skill, i) => (
      <li key={`skill${i}`}>{skill}</li>
    ))}
  </ul>
);

export default Skills;
