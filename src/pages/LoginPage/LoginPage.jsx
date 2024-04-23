import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginPage.module.css"
const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = (userData) => {
    dispatch(logIn(userData));
  };

  return (
    <div>
      <h2 className={css.loginPageTitle}>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;



