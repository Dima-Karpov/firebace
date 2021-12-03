import {ChangeEvent, FC, memo, useCallback} from 'react';
import s from './LoginForm.module.css';
import {LoginPropsType} from './types/LoginPropsType';

export const LoginForm: FC<LoginPropsType> = memo((props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    handleSingUp,
  } = props;

  const onSetEmailInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }, [setEmail]);
  const onSetPassowrdInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }, [setPassword]);
  const onSetHasAccountSpan = () => {
    setHasAccount(!hasAccount)
  }

  return (
    <div className={s.loginBlock}>
      <div className={s.loginContainer}>
        <span>Email</span>
        <input
          type='text'
          value={email}
          onChange={onSetEmailInput}
          required
        />
        <p className={s.errorMsg}>{emailError}</p>
        <span>Password</span>
        <input
          type='password'
          value={password}
          onChange={onSetPassowrdInput}
          required
        />
        <p className={s.errorMsg}>{passwordError}</p>
        <div className={s.btnContainer}>
          {
            hasAccount ? (
              <>
                <button onClick={handleLogin}>Sing in</button>
                <p>Dont't have an account ?
                  <span onClick={onSetHasAccountSpan}>Sing up</span>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSingUp}>Sing up</button>
                <p>Have an account ?
                  <span onClick={onSetHasAccountSpan}>Sing in</span>
                </p>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
});