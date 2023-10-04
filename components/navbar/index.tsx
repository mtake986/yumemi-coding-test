import Header from "./header";
import styles from "./index.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Header title="都道府県別の人口推移" />
      </div>
    </nav>
  );
};

export default Navbar;
