import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { toggleLogIn, toggleSignIn } from "../../app/registrationSlice";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header : FC = () => {
  const dispatch = useAppDispatch();

  return (
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
            <button className={styles.registrationLogIn} onClick={() => dispatch(toggleLogIn())}>Log in</button>
            <button className={styles.registrationSignIn} onClick={() => dispatch(toggleSignIn())}>Sign in</button>
          </div> 
        </div>
      </div>
    </header>
  )
};

export default Header;