import { FC } from "react";
import styles from "./Header.module.scss";

const Header : FC = () => {

  return (
    <>
      <header className={styles.parent}>
        <div className={styles.logo}></div>
        <nav className={styles.nav}>
          <p className={styles.navItem}>Новинки</p>
          <p className={styles.navItem}>Мужское</p>
          <p className={styles.navItem}>Женское</p>
          <p className={styles.navItem}>Аксесуары</p>
        </nav>

      </header>
    </>
  )
};

export default Header;