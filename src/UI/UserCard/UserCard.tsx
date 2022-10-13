import React from "react";
import { useAppSelector } from "../../hooks/redux";
import Avatar from "../../img/Avatar.png";
import { IWorker } from "../../models/IWorker";
import "./UserCard.css";

interface UserCardProps {
  worker: IWorker;
  onClick: (id: string | undefined) => void;
}

const UserCard: React.FC<UserCardProps> = ({ worker, onClick }) => {
  const { filterModalValue } = useAppSelector((state) => state.filterReducer);

  const birthMonth = worker.birthday.slice(5, 7).replace("0", "");
  const stringBirthMonth = new Date(0, +birthMonth, 0)
    .toLocaleString("default", { month: "short" })
    .slice(0, -1);
  const birthday =
    worker.birthday.slice(8).replace("0", "") + " " + stringBirthMonth;

  return (
    <div className="UserCard" >

        <div className="UserCard__profile" onClick={() => onClick(worker.id)}>
          <div className="UserCard__photo">
            <img src={worker.avatarUrl} alt="" />
          </div>
          <div className="UserCard__info">
            <div>
              <div className="info__nameInfo">
                <div className="nameInfo__name">
                  {worker.firstName + " " + worker.lastName}
                </div>
                <div className="nameInfo__initials">{worker.userTag}</div>
              </div>
              <div className="info__position">{worker.department}</div>
            </div>
          </div>
        </div>
        <div className="UserCard__birthday">
          {filterModalValue === "birthday" ? birthday : null}
        </div>

    </div>
  );
};

export default UserCard;
