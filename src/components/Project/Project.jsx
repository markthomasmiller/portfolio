import React from "react";
import styles from "./Project.module.css";
import Gallery from "../Gallery";
import Skills from "../Skills";

const Project = ({ project }) => {
  const { images, title, description, link, skills, fact } = project;
  return (
    <div className={styles.project}>
      <Gallery images={images} />
      <div className={styles.thing}>
        <div className={styles.left}>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link.url}>{link.text}</a>
        </div>
        <div className={styles.right}>
          <Skills skills={skills} />
          <p>{fact}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
