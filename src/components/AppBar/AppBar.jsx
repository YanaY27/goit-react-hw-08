import { useSelector } from "react-redux";
import s from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/slice";

const AppBar = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <header className={s.container}>
      <Navigation />
      {isLoggedin ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
