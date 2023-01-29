import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "../../img/SearchIcon.png";
import SearchFilterIcon from "../../img/SearchFilterIcon.png";
import changedModalFilter from "../../img/changedModalFilter.png";
import { filterSlice } from "../../store/reducers/FilterSlice";
import ModalWindow from "../Modal/ModalWindow";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import SelectedPage from '../../img/SelectedPage.png'

const Search: React.FC = () => {
  const { filterModalValue } = useAppSelector((state) => state.filterReducer);
  const { setModalState, changeSearchContent } = filterSlice.actions;
  const dispatch = useAppDispatch();
  const [searchName, setSearchName] = useState("");
  const [searchNameTimeOut, setSearchNameTimeOut] = useState("");
  const [isSearchSelected, setIsSearchSelected] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSearchNameTimeOut(searchName);
    }, 700);
  }, [searchName]);

  useEffect(() => {
    if (searchNameTimeOut === searchName) {
      dispatch(changeSearchContent(searchNameTimeOut));
    }
  }, [searchName, searchNameTimeOut]);

  return (
    <div className="Search">
      <div className="Search__SearchIcon">
        <img src={isSearchSelected ? SelectedPage : SearchIcon} alt="Search" />
      </div>
      <input
        className="Search__field"
        type="search"
        placeholder="Введи имя, тег..."
        onChange={(e) => setSearchName(e.target.value)}
      />
      <div className="Search__SearchFilterIcon">
        <button
          className="SearchFilterIcon__button"
          onClick={() => dispatch(setModalState(true))}
        >
          <img
            src={
              filterModalValue === "alphabet" ? SearchFilterIcon : changedModalFilter
            }
            alt="Filter"
          />
        </button>
      </div>
      <ModalWindow />
    </div>
  );
};

export default Search;
