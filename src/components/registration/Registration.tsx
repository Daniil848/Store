import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IRegistretionState, toggleLogIn, toggleSignIn} from "../../app/registrationSlice";
import styles from "./Registration.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Registration : FC = () => {
  const state : IRegistretionState = useAppSelector(state => state.registration);
  const dispatch = useAppDispatch();
  
  if (state.logIn === true) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <button className={styles.formClose} onClick={() => dispatch(toggleLogIn())}><FontAwesomeIcon icon={faXmark}/></button>
          <p className={styles.formTitle}>Log In</p>
          <div className={styles.inputsWrapper}>
            {/* <label className={styles.inputLabel}>Email</label> */}
            <input type="email" placeholder="Email" className={styles.input}/>
          </div>
          <div className={styles.inputsWrapper}>
            {/* <label className={styles.inputLabel}>Password</label> */}
            <input type="password" placeholder="Password" className={styles.input}/>
          </div>
          <button  className={styles.button}>OK</button>
        </div>
      </div>
    );
  } else if (state.signIn) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <button className={styles.formClose} onClick={() => dispatch(toggleSignIn())}><FontAwesomeIcon icon={faXmark}/></button>
          <p className={styles.formTitle}>Sign In</p>
          <div className={styles.inputsWrapper}>
            {/* <label className={styles.inputLabel}>Email</label> */}
            <input type="email" placeholder="Email" className={styles.input}/>
          </div>
          <div className={styles.inputsWrapper}>
            {/* <label className={styles.inputLabel}>Password</label> */}
            <input type="password" placeholder="Password" className={styles.input}/>
          </div>
          <div className={styles.inputsWrapper}>
            {/* <label className={styles.inputLabel}>Password</label> */}
            <input type="password" placeholder="Confirm Password" className={styles.input}/>
          </div>
          <button  className={styles.button}>OK</button>
        </div>
      </div>
    )
    
  } else {
    return null;
  }
};

export default Registration;