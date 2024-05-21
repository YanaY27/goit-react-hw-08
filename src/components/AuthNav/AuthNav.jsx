import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.container}>
      <NavLink to="/register" className={activeClass}>
        Register
      </NavLink>

      <NavLink to="/login" className={activeClass}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
