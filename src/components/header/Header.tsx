import { FC } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header : FC = () => {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.headerLogo}></div>
          </div>
          <form action="" className={styles.headerSearch}>
            <input type="search" className={styles.headerSearchInput}/>
            <button className={styles.headerSearchButton}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </form>
          <div className={styles.headerProfile}>
            <button className={styles.headerProfileBasket}><FontAwesomeIcon icon={faBasketShopping}/></button>
            <button className={styles.headerProfileUser}></button>
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;