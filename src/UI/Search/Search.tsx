import React from "react";
import "./Search.css";
import SearchIcon from "../../img/SearchIcon.png";
import SearchFilterIcon from "../../img/SearchFilterIcon.png";
import { Button } from "@mui/material";
import { filterSlice } from "../../store/reducers/FilterSlice";
import ModalWindow from "../Modal/ModalWindow";
import { useAppDispatch } from "../../hooks/redux";

const Search: React.FC = () => {


  const {setModalState} = filterSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className="Search">
      <div className="Search__SearchIcon">
        <img src={SearchIcon} alt="Search" />
      </div>
      <input
        className="Search__field"
        type="search"
        placeholder="Введи имя, тег, почту..."
      />
      <div className="Search__SearchFilterIcon">
        <button className='SearchFilterIcon__button' onClick={() => dispatch(setModalState(true))}>
          <img src={SearchFilterIcon} alt="Filter" />
        </button>
      </div>
      <ModalWindow />
    </div>
  );
};

export default Search;
