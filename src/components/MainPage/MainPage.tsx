import React from "react";
import TopBar from "../../UI/TopBar/TopBar";
import WorkersField from "../WorkersField/WorkersField";
import './MainPage.css'

const MainPage: React.FC = () => {

  return (
    <div className="MainPage">
      <TopBar />
      <div className="MainPage__ContentPart ContentPart">
        <WorkersField />
      </div>
    </div>
  )
}


export default MainPage