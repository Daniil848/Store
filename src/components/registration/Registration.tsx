import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IRegistretionState, toggleLogIn, toggleSignIn, switchRegistration,} from "../../app/registrationSlice";
import styles from "./Registration.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  const state : IRegistretionState = useAppSelector(state => state.registration);
  const dispatch = useAppDispatch();

  const [shouldSwitch, setShouldSwitch] = useState(false);
  const [shouldClose, setShouldClose] = useState(false);
  const [animate, setAnimate] = useState(styles.animateIn);
  
  useEffect(() => {
    if (shouldClose) {
      const timer = setTimeout(() => {
        if (state.logIn) {
          dispatch(toggleLogIn());
        } else if (state.signIn) {
          dispatch(toggleSignIn());
        }
        
        setShouldClose(false);
        setAnimate(styles.animateIn);
      }, 500);

      return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    }
  }, [shouldClose,dispatch, state.logIn, state.signIn]);

  useEffect(() => {
    if (shouldSwitch) {
      
      dispatch(switchRegistration());

      setShouldSwitch(false);
      setAnimate(styles.animateIn);
    }
  },[shouldSwitch, dispatch])

  const handleClose = () => {
    setShouldClose(true);
    setAnimate(styles.animateOut);
  };

  const handleSwitch = () => {
    setShouldSwitch(true);
    setAnimate(styles.animate);
  };

  if (state.logIn || state.signIn) {
    return (
      <div className={styles.wrapper}>
        <div className={animate}>
          <div className={styles.form}>
            <button className={styles.formClose} onClick={() => handleClose()}><FontAwesomeIcon icon={faXmark}/></button>
            <div className={styles.formTitles}>
              <button className={styles.formTitle} onClick={()=> handleSwitch()}>Log In</button>
              <button className={styles.formTitle} onClick={()=> handleSwitch()}>Sign In</button>
            </div>
            <div className={styles.inputsWrapper}>
              <input type="email" placeholder="Email" className={styles.input}/>
            </div>
            <div className={styles.inputsWrapper}>
              <input type="password" placeholder="Password" className={styles.input}/>
            </div>
            {state.signIn && <div className={styles.inputsWrapper}>
              <input type="password" placeholder="Confirm Password" className={styles.input}/>
            </div>}
            <button className={styles.button}>OK</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  };
};

export default Registration;