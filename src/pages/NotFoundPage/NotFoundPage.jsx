import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <img
        src="../../../public/attachment.jpg"
        width={1000}
        className={s.img}
      />
      <Link to="/" className={s.tittle}>
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
