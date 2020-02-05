import React from "react";
import styles from "./Project.module.css";
import Gallery from "../Gallery";
import Skills from "../Skills";
import Markdown from "react-markdown";

const Project = ({ project }) => {
  const { images, title, description, link, skills, sampleData } = project;
  return (
    <div className={styles.project}>
      <Gallery images={images} sampleData={sampleData} />
      <div className={styles.columns}>
        <div className={styles.left}>
          <h3>{title}</h3>
          <Markdown source={description} />
          {link && <a href={link.url}>{link.text} →</a>}
        </div>
        <div className={styles.right}>
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  );
};

export default Project;
