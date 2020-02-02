import React from "react";
import styles from "./Project.module.css";
import Gallery from "../Gallery";
import Skills from "../Skills";

const Project = ({ project }) => {
  const { images, title, description, link, skills } = project;
  return (
    <div className={styles.project}>
      <Gallery images={images} />
      <div className={styles.columns}>
        <div className={styles.left}>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link.url}>{link.text} →</a>
        </div>
        <div className={styles.right}>
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  );
};

export default Project;
