import React from "react";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <p className={styles.title}>都道府県別の人口推移</p>
      </div>
    </header>
  );
};

export default Header;
