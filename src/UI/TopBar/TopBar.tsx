import React from "react"
import Positions from "../Positions/Positions"
import Search from "../Search/Search"
import './TopBar.css'

const TopBar: React.FC = () => {

  return (
    <div className="TopBar">
      <div className="TopBar__Poisk">
        Поиск
      </div>
      <div className="TopBar__Search">
        <Search />
      </div>
      <div className="TopBar__Positions">
        <Positions />
      </div>
    </div>
  )
}


export default TopBar