import React from "react";
import styles from "../rightbar/rightbar.module.css";
import { MdPlayCircleFilled } from "react-icons/md";
import Image from "next/image";

export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="" alt="" width={50} height={50} className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now </span>
          <h3 className={styles.title}>
            How to use the new version of Admin dashboard?
          </h3>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            labore laudantium corporis quas
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}></div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now </span>
          <h3 className={styles.title}>
            How to use the new version of Admin dashboard?
          </h3>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            labore laudantium corporis quas
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}
