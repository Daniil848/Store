import { FC } from "react";
import styles from "./LogIn.module.scss";

const LogIn : FC = () => {
  return (
    <>
      <div className={styles.form}>
        <div>
          <p>Username or Email</p>
          <input type="text"/>
        </div>
        <div>
          <p>Password</p>
          <input type="text"/>
        </div>
        <button>Log In</button>
      </div>
    </>
  );
};

export default LogIn;