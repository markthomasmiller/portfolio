import React from "react";
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
  { text: "JavaScript", icon: <DiJavascript1 />, color: "#ead54d", top: true },
  { text: "Ruby on Rails", icon: <GoRuby />, color: "#c70000" },
  { text: "Frontend performance", icon: <IoMdSpeedometer />, color: "#0000c7" },
  { text: "HTML5", icon: <FaHtml5 />, color: "#de4b26" },
  { text: "CSS3", icon: <DiCss3 />, color: "#254cde" }
];

const designServices = [
  { text: "UI/UX", icon: <GiLargePaintBrush />, color: "#19b4b4", top: true },
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

export { developmentServices, designServices, generalServices };
