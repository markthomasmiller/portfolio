import React from "react";
import "./styles/font.css";
import "./styles/variables.css";
import "./styles/reset.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import CTA from "./components/CTA";

const App = () => (
  <div>
    <Header />
    <Introduction />
    <Projects />
    <CTA />
  </div>
);

export default App;
