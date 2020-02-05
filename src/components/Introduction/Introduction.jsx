import React from "react";
import styles from "./Introduction.module.css";
import Testimonial from "../Testimonial";

const Introduction = () => (
  <div className={styles.introduction}>
    <h1>“Mark is without a doubt our secret weapon.”</h1>
    <p>
      I'm Mark Thomas Miller,{" "}
      <span className={styles.highlight}>a hybrid engineer and designer</span>{" "}
      who works primarily with React and Ruby on Rails. I strive to build
      beautiful, cohesive, and ethical products. I'm currently available for
      consulting work.
    </p>
    <Testimonial
      name="Daeshawn Ballard"
      image="/assets/daeshawn.png"
      company="RCI"
      url="https://riversidecenterforinnovation.com"
    >
      Mark listens intently and not only hears what you <em>want</em>, but what
      you <em>need</em>. His ability to break through the chatter and get to the
      root of the actual problems we're trying to solve has saved us
      considerable time and money. We can always count on him to deliver
      amazing, quality work on time, and to communicate exceptionally well. He
      is without a doubt our secret weapon.
    </Testimonial>
  </div>
);

export default Introduction;
