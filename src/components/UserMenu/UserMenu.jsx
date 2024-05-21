import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUserName } from "../../redux/auth/slice";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Welcome, {username}</h2>
      <button onClick={() => dispatch(logoutThunk())} className={s.btn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
