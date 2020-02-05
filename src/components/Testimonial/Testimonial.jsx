import React from "react";
import styles from "./Testimonial.module.css";

const Testimonial = ({ children, name, image, company, url }) => (
  <div className={styles.testimonial}>
    <div className={styles.content}>{children}</div>
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className={styles.person}
    >
      <img src={image} alt={name} />
      {name}, {company}
    </a>
  </div>
);

export default Testimonial;
