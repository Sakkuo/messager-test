import React from "react";
import Avatar from "../../img/Avatar.png";
import { IWorker } from "../../models/IWorker";
import "./UserCard.css";


interface UserCardProps {
  worker: IWorker
}

const UserCard: React.FC<UserCardProps> = ({ worker }) => {
  return (
    <div className="UserCard">
      <div className="UserCard__photo">
        <img src={worker.avatarUrl} alt="" />
      </div>
      <div className="UserCard__info">
        <div>
          <div className="info__nameInfo">
            <div className="nameInfo__name">{worker.firstName + ' ' + worker.lastName}</div>
            <div className="nameInfo__initials">{worker.userTag}</div>
          </div>
          <div className="info__position">{worker.department}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
