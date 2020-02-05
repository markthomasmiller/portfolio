import React from "react";
import "./styles/font.css";
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/layout.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <div className="content">
      <Header />
      <Introduction />
      <Projects />
      <Services />
      <CTA />
      <Footer />
    </div>
  </div>
);

export default App;
