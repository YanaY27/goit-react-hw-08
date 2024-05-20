import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filterSlice";
import { selectNameFilter } from "../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={s.search}>
      <label htmlFor="searchID" className={s.label}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="search"
        name="search"
        id="searchID"
        placeholder="Find..."
        value={filter}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
