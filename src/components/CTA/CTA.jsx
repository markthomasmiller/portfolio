import React from "react";
import styles from "./CTA.module.css";

const CTA = () => (
  <div className={styles.cta}>
    <div className={styles.content}>
      <div className={styles.left}>
        <img src="/assets/mark.png" alt="Mark Thomas Miller" />
      </div>
      <div className={styles.right}>
        <h2>Interested in working together?</h2>
        <p>
          I'd love to hear from you. Send me an email, and be sure to share as
          much info as you can about what you're trying to achieve and what sort
          of budget you have in place.
        </p>
        <a href="mailto:mark@mayvalellc.com">Send me an email →</a>
      </div>
    </div>
  </div>
);

export default CTA;
