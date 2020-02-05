import React from "react";
import styles from "./Skills.module.css";

const Skills = ({ skills }) => (
  <div className={styles.skills}>
    <ul>
      <li>
        <strong>Development</strong>
      </li>
      {skills.development.map((skill, i) => (
        <li className={styles.skill} key={`skill${i}`}>
          {skill}
        </li>
      ))}
    </ul>
    <ul>
      <li>
        <strong>Design</strong>
      </li>
      {skills.design.map((skill, i) => (
        <li className={styles.skill} key={`skill${i}`}>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
