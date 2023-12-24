import React from "react";
import styles from "../transactions/transactions.module.css";
import Image from "next/image";

export default function Transactions() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Transactions</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.image}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$5,000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.image}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$5,000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.image}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$5,000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.image}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$5,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
