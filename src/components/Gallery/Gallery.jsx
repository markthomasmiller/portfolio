import React from "react";
import styles from "./Gallery.module.css";

function Gallery({ images }) {
  return (
    <div className={styles.gallery}>
      <img src="/assets/example.png" alt="TODO" />
    </div>
  );
}

export default Gallery;
