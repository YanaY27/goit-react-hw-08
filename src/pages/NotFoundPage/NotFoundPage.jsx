import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <img src="../../../public/attachment.jpg" width={1000} />
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
