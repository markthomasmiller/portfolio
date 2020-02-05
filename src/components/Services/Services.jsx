import React from "react";
import styles from "./Services.module.css";
import Service from "../Service";
import {
  developmentServices,
  designServices,
  generalServices
} from "../../data/services";

const Services = () => (
  <div className={styles.services}>
    <div className={styles.content}>
      <div className={styles.description}>
        <h2>Capabilities</h2>
        <p>
          I work between disciplines to create elegant, high-quality products. I
          work primarily on frontend and design-related tasks, but am also
          comfortable on the backend. I take pride in delivering high-quality
          work with a keen attention to detail.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.column}>
          <h4>Development</h4>
          <ul>
            {developmentServices.map(service => (
              <Service {...service} />
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Design</h4>
          <ul>
            {designServices.map(service => (
              <Service {...service} />
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h4>General</h4>
          <ul>
            {generalServices.map(service => (
              <Service {...service} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
