import React from "react";
import { useAppSelector } from "../../hooks/redux";
import TopBar from "../../UI/TopBar/TopBar";
import ErrorPage from "../ErrorPage/ErrorPage";
import WorkersField from "../WorkersField/WorkersField";
import './MainPage.css'

const MainPage: React.FC = () => {

  const {error} = useAppSelector(state => state.filterReducer)

  return (
    <div className="MainPage">
      <TopBar />
      <div className="MainPage__ContentPart ContentPart">
        {error ? <ErrorPage />:<WorkersField />}
      </div>
    </div>
  )
}


export default MainPage