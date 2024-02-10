import React from "react";
import styles from "../footer/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ahmed Raza Shaikh</div>
      <div className={styles.text}>@ All Rights Reserved</div>
    </div>
  );
}
