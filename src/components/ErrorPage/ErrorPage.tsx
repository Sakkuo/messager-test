import React from "react";
import "./ErrorPage.css";
import ErrorShip from "../../img/ErrorShip.png";
import { dataAPI } from "../../services/DataService";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterSlice } from "../../store/reducers/FilterSlice";

const ErrorPage: React.FC = () => {
  const { filterParams } =
    useAppSelector((state) => state.filterReducer);
  const dispatch = useAppDispatch()
  const {
    changeErrorState
  } = filterSlice.actions;
  const {
    refetch
  } = dataAPI.useFetchAllDataQuery(filterParams);


  return (
    <div className="ErrorPage">
      <div>
        <img className="ErrorPage__img" src={ErrorShip} alt="ErrorShip" />
      </div>
      <div className="ErrorPage__title">Какой-то сверхразум все сломал</div>
      <div className="ErrorPage__subtitle">Постараемся быстро починить</div>
      <div className="ErrorPage__again" onClick={() => {
        refetch()
        dispatch(changeErrorState(''))
        }}>Попробовать снова</div>
    </div>
  );
};

export default ErrorPage;
