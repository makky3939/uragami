import type { NextPage } from "next";

import styles from "../styles/valorant.module.css";

const ValorantTimeout: NextPage = () => {
  const text = "TIMEOUT";
  return (
    <div className={styles.background}>
      <div className={styles.borderBox}>
        <div className={styles.text}>{text}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default ValorantTimeout;
