export type LoginPropsType = {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  handleLogin: () => void;
  hasAccount: boolean
  setHasAccount: (value: boolean) => void;
  handleSingUp: () => void;
  emailError: string;
  passwordError: string;
};