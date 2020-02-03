import React from "react";
import styles from "./Project.module.css";
import Gallery from "../Gallery";
import Skills from "../Skills";
import Markdown from "react-markdown";

const Project = ({ project }) => {
  const { images, title, description, link, skills } = project;
  return (
    <div className={styles.project}>
      <Gallery images={images} />
      <div className={styles.columns}>
        <div className={styles.left}>
          <h3>{title}</h3>
          <Markdown source={description} />
          {link ? (
            <a href={link.url}>{link.text} →</a>
          ) : (
            <div className={styles.comingSoon}>Link coming soon</div>
          )}
        </div>
        <div className={styles.right}>
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  );
};

export default Project;
