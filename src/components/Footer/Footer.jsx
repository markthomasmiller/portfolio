import React from "react";
import styles from "./Footer.module.css";
import footerLinks from "../../data/footerLinks";

const Footer = () => (
  <div className={styles.footer}>
    <ul>
      {footerLinks.map(link => (
        <li key={link.text}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
