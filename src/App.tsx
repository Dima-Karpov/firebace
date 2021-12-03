import {FC, useEffect, useState} from 'react';
import './App.module.css';

import {EmptiString} from './constans/index';
import appFire from './fire';

import {LoginForm} from './components/LoginForm/LoginForm';
import {Profile} from './components/Profile/Profile';



export const App: FC = () => {
  const [user, setUser] = useState<string>(EmptiString);
  const [email, setEmail] = useState<string>(EmptiString);
  const [password, setPassword] = useState<string>(EmptiString);
  const [emailError, setEmailError] = useState<string>(EmptiString);
  const [passwordError, setPasswordError] = useState<string>(EmptiString);
  const [hasAccount, setHasAccount] = useState<boolean>(false);

  const clearInputs = () => {
    setEmail(EmptiString);
    setPassword(EmptiString);
  };
  const clearError = () => {
    setEmailError(EmptiString);
    setPasswordError(EmptiString);
  };
  const handleLogin = () => {
    clearError();
    appFire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error: any) => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(error.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(error.message);
            break;
        }
      });
  };
  const handleSignUp = () => {
    clearError();
    appFire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error: any) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(error.message);
            break;
          case 'auth/weak-password':
            setPasswordError(error.message);
            break;
        }
      });
  };
  const handleLogout = () => {
    appFire.auth().signOut();
  };
  const authListener = () => {
    appFire.auth().onAuthStateChanged((user: string) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser(EmptiString)
      }
    })
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className='App'>
      {!user ? (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          handleSingUp={handleSignUp}
        />
      ) : (
        <Profile handleLogout={handleLogout} />
      )}
    </div>
  );
};

