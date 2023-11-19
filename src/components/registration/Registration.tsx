import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleLogIn, toggleSignIn, switchRegistration, signIn, IUser} from "../../app/registrationSlice";
import styles from "./Registration.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  const state = useAppSelector(state => state.registration);
  const dispatch = useAppDispatch();

  const [shouldSwitch, setShouldSwitch] = useState(false);
  const [shouldClose, setShouldClose] = useState(false);
  const [animation, setAnimation] = useState(styles.animateIn);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let userDb : IUser = {
    id : 0,
    email : userName,
    username : email,
    password : password,
  };
  
  useEffect(() => {
    if (shouldClose) {
      const timer = setTimeout(() => {
        if (state.logIn) {
          dispatch(toggleLogIn());
        } else if (state.signIn) {
          dispatch(toggleSignIn());
        }
        
        setShouldClose(false);
        setAnimation(styles.animateIn);
      }, 500);

      return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    }
  }, [shouldClose, dispatch, state.logIn, state.signIn]);

  useEffect(() => {
    if (shouldSwitch) {
      
      dispatch(switchRegistration());

      setShouldSwitch(false);
      setAnimation(styles.animateIn);
    }
  },[shouldSwitch, dispatch]);

  const handleClose = () => {
    setShouldClose(true);
    setAnimation(styles.animateOut);
  };

  const handleSwitch = () => {
    setShouldSwitch(true);
    setAnimation(styles.animate);
  };

  if (state.logIn || state.signIn) {
    return (
      <div className={styles.wrapper}>
        <div className={animation}>
          <div className={styles.form}>
            <button className={styles.formClose} onClick={() => handleClose()}><FontAwesomeIcon icon={faXmark}/></button>
            <div className={styles.formTitles}>
              <button className={styles.formTitle} onClick={()=> handleSwitch()}>{state.logIn ? "Log In" : "Sign In"}</button>
            </div>
            {state.signIn && <div className={styles.inputsWrapper}>
              <input type="text" placeholder="User name" onChange={e => setUserName(e.target.value)} className={styles.input}/>
            </div>}
            <div className={styles.inputsWrapper}>
              <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className={styles.input}/>
            </div>
            <div className={styles.inputsWrapper}>
              <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className={styles.input}/>
            </div>
            {state.signIn && <div className={styles.inputsWrapper}>
              <input type="password" placeholder="Confirm Password" className={styles.input}/>
            </div>}
            <button className={styles.button} onClick={() => dispatch(signIn(userDb))}>OK</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  };
};

export default Registration;