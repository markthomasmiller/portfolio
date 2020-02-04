import React from "react";
import styles from "./Skills.module.css";

const Skills = ({ skills }) => (
  <div className={styles.skills}>
    <strong>What I handled:</strong>
    <ul>
      {skills.map((skill, i) => (
        <li className={styles.skill} key={`skill${i}`}>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
