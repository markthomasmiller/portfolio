import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects";
import Project from "../Project";

const Projects = () => (
  <div className={styles.projects}>
    {projects.map(project => (
      <Project key={project.title} project={project} />
    ))}
  </div>
);

export default Projects;
