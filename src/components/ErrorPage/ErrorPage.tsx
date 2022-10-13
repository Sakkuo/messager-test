import React from "react";
import "./ErrorPage.css";
import ErrorShip from "../../img/ErrorShip.png";

const ErrorPage: React.FC = () => {
  return (
    <div className="ErrorPage">
      <div>
        <img className="ErrorPage__img" src={ErrorShip} alt="ErrorShip" />
      </div>
      <div className="ErrorPage__title">Какой-то сверхразум все сломал</div>
      <div className="ErrorPage__subtitle">Постараемся быстро починить</div>
      <div className="ErrorPage__again" onClick={() => window.location.reload()}>Попробовать снова</div>
    </div>
  );
};

export default ErrorPage;
