import React from "react";
import styles from "./index.module.css";
type Props = {
  title: string;
}
const Header = ({title}: Props) => {
  return (
    <h1 className={styles.headerTitle}>{title}</h1>
  );
};

export default Header;
