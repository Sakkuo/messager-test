import React from "react";
import "./CantFind.css";
import loupe from "../../img/loupe.png";

const CantFind: React.FC = () => {
  return (
    <div className="CantFind">
      <div>
        <img src={loupe} alt="" className="CantFind__img" />
      </div>
      <div className="CantFind__title">Мы никого не нашли</div>
      <div className="CantFind__subtitle">Попробуй скорректировать запрос</div>
    </div>
  );
};

export default CantFind;
