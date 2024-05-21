import { InfinitySpin } from "react-loader-spinner";
import s from "./RefreshLoader.module.css";

const RefreshLoader = () => {
  return (
    <div className={s.refresher}>
      <InfinitySpin
        visible={true}
        width="300"
        height="300"
        color="#41644A"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default RefreshLoader;
