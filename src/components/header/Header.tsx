import { FC } from "react";
import { Link } from "react-router-dom";
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
            <button className={styles.headerSearchButton}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
          </form>
          <div className={styles.rightContent}>
            <button className={styles.headerProfileBasket}><FontAwesomeIcon icon={faBasketShopping}/></button>
            <div className={styles.registration}>
              <Link to={'/logIn'} className={styles.registrationLogIn}>Log in</Link>
              {/* <Link to={'/signIn'} className={styles.registrationSignIn}>Sign in</Link> */}
            </div> 
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;