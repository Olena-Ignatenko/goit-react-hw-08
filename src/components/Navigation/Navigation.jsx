import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div >
    <nav className={css.navLinkWrapper}>
      <NavLink className={css.linkHome} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.linkContacts} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
    </div>

  );
};

export default Navigation;

