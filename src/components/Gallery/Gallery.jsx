import React, { useState } from "react";
import styles from "./Gallery.module.css";
import NavigationArrow from "../NavigationArrow";
import { IoIosStar } from "react-icons/io";

export default function Gallery({ images, sampleData }) {
  const [current, setCurrent] = useState(0);
  const image = images[current];

  function increment(n) {
    const lastIndex = images.length - 1;
    const next = current + n;
    if (next > lastIndex) setCurrent(0);
    else if (next < 0) setCurrent(lastIndex);
    else setCurrent(next);
  }

  return (
    <div className={styles.gallery}>
      <img src={image.url} alt={image.current} />
      <NavigationArrow direction="left" onClick={() => increment(-1)} />
      <NavigationArrow direction="right" onClick={() => increment(1)} />
      {sampleData && (
        <div className={styles.sample}>
          <IoIosStar /> This is sample data
        </div>
      )}
    </div>
  );
}
