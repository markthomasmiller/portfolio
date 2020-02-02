import React from "react";
import "./styles/font.css";
import "./styles/variables.css";
import "./styles/reset.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Services from "./components/Services";
import CTA from "./components/CTA";

const App = () => (
  <div>
    <Header />
    <Introduction />
    <Projects />
    <Services />
    <CTA />
  </div>
);

export default App;
