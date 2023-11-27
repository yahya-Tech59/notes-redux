import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../redux/NoteSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.setSearchText);
  function handleChange(e) {
    const text = e.target.value;
    dispatch(setSearchText(text));
  }
  return (
    <div>
      <input
        type="text"
        className="search-box"
        value={searchValue}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};
