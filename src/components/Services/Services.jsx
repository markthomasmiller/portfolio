import React from "react";
import styles from "./Services.module.css";
import Service from "../Service";

import { FaReact, FaHtml5, FaChessRook, FaMoneyBillWave } from "react-icons/fa";
import { DiJavascript1, DiCss3 } from "react-icons/di";
import { GoRuby } from "react-icons/go";
import { IoMdSpeedometer } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { MdAccessibility } from "react-icons/md";
import {
  GiLargePaintBrush,
  GiPathDistance,
  GiFountainPen
} from "react-icons/gi";

const developmentServices = [
  { text: "React", icon: <FaReact />, color: "#60d7f7", top: true },
  { text: "JavaScript", icon: <DiJavascript1 />, color: "#ead54d" },
  { text: "Ruby on Rails", icon: <GoRuby />, color: "#c70000" },
  { text: "Frontend performance", icon: <IoMdSpeedometer />, color: "#0000c7" },
  { text: "HTML5", icon: <FaHtml5 />, color: "#de4b26" },
  { text: "CSS3", icon: <DiCss3 />, color: "#254cde" }
];

const designServices = [
  { text: "UI/UX", icon: <GiLargePaintBrush />, color: "#19b4b4" },
  { text: "Landing page design", icon: <FaMoneyBillWave />, color: "#85bb65" },
  { text: "User flow", icon: <GiPathDistance />, color: "#c70000" },
  { text: "Mobile design", icon: <AiOutlineMobile />, color: "#00c700" },
  { text: "Accessibility", icon: <MdAccessibility />, color: "#0000c7" },
  { text: "Design system frameworks", icon: <FiGrid />, color: "#19b4b4" }
];

const generalServices = [
  { text: "Product strategy", icon: <FaChessRook />, color: "#0000c7" },
  { text: "Copywriting", icon: <GiFountainPen />, color: "#1f252b" }
];

const Services = () => (
  <div className={styles.services}>
    <div className={styles.content}>
      <h2>Capabilities</h2>
      <div className={styles.description}>
        I work between disciplines to create elegant, high-quality products. I
        work primarily on frontend and design-related tasks, but am also
        comfortable on the backend. I take pride in delivering high-quality work
        with a keen attention to detail.
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
