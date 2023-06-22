import { FC } from "react";
import styles from "./Header.module.scss";

const Header : FC = () => {

  return (
    <>
      <header className={styles.parent}>
        <div>
          <div className={styles.logo}></div>

        </div>
        
        <nav className={styles.nav}>
          <button></button>
          <button></button>
        </nav>
      </header>
    </>
  )
};

export default Header;