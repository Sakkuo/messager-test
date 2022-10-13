import "./UserPage.css";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { IWorker } from "../../models/IWorker";
import phoneIcon from "../../img/phoneIcon.png";
import StarIcon from "../../img/StarIcon.png";
import Array from "../../img/Array.png";

type UserItemPageParams = {
  id: string;
};

const UserPage = () => {
  const params = useParams<UserItemPageParams>();
  const { workers } = useAppSelector((state) => state.filterReducer);
  const navigate = useNavigate()

  const needWorker = workers.filter((profile: IWorker) => {
    return profile.id.includes(`${params.id}`);
  });

  const birthMonth = needWorker[0].birthday.slice(5, 7).replace("0", "");
  const stringBirthMonth = new Date(0, +birthMonth, 0).toLocaleString("default", {
    month: "long",
  });
  const birthday =
    needWorker[0].birthday.slice(8).replace("0", "") +
    " " +
    stringBirthMonth +
    " " +
    `${needWorker[0].birthday.slice(0, 4)}`;

  const phoneNumber =
    needWorker[0].phone.slice(0, 2) +
    ` (${needWorker[0].phone.slice(2, 5)}) ` +
    `${needWorker[0].phone.slice(5, 8)} ` +
    `${needWorker[0].phone.slice(8, 10)} ` +
    `${needWorker[0].phone.slice(10)}`;

  const getAge = (dateString: string) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const declOfNum = (number: number, words: string[]) => {
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
    ];
  };

  return (
    <div className="UserPage">
      <img onClick={() => navigate('/')}className="UserPage__back" src={Array}/>
      <div className="UserPage__profile">
        <div>
          <img className="profile__img" src={needWorker[0].avatarUrl} alt="" />
        </div>
        <div className="profile__nameAndTag">
          <div className="profile__name">
            {needWorker[0].firstName} {needWorker[0].lastName}
          </div>
          <div className="profile__tag">{needWorker[0].userTag}</div>
        </div>

        <div className="profile__position">{needWorker[0].department}</div>
      </div>
      <div className="UserPage__data">
        <div className="data__years">
          <div className="data__birthdayAndIcon">
            <img className="data__icon" src={StarIcon} alt="" />
            <div className="data__birthday">{birthday}</div>
          </div>
          <div className="data__yearsNow">
            {getAge(needWorker[0].birthday)}{" "}
            {declOfNum(getAge(needWorker[0].birthday), ["год", "года", "лет"])}
          </div>
        </div>
        <div className="data__telephone">
          <img className="telephone__icon" src={phoneIcon} alt="" />
          <a href={`tel:${needWorker[0].phone}`}>{phoneNumber}</a>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
