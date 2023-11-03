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
        <form className={styles.headerSearch}> 
          <FontAwesomeIcon className={styles.headerSearchIcon} icon={faMagnifyingGlass}/>  
          <input type="search" id="default-search" className={styles.headerSearchInput} placeholder="Search products" required></input>
          <button type="submit" className={styles.headerSearchButton}>Search</button>
        </form>
        <div className={styles.rightContent}>
          <button className={styles.headerProfileBasket}><FontAwesomeIcon icon={faBasketShopping}/></button>
        </div>
        <div className={styles.registration}>
            <button className={styles.registrationLogIn} onClick={() => dispatch(toggleLogIn())}>Log in</button>
            <button className={styles.registrationSignIn} onClick={() => dispatch(toggleSignIn())}>Sign in</button>
          </div>
      </div>
    </header>
  )
};

export default Header;