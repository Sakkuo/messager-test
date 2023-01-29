import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { IWorker } from "../../models/IWorker";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import UserCard from "../../UI/UserCard/UserCard";
import "./WorkersField.css";
import SlashYear from "../../UI/SlashYear/SlashYear";
import CantFind from "../CantFind/CantFind";
import { useNavigate } from "react-router-dom";
import SkeletonLoad from "../../UI/SkeletonLoad/SkeletonLoad";

const WorkersField: React.FC = () => {
  const { workers, filterValue, filterModalValue, searchContent, isFetchingState } =
    useAppSelector((state) => state.filterReducer);
  const navigate = useNavigate();

  const nowDayAndMonth = () => {
    const nowDate = new Date();
    const result = `${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
    if (nowDate.getMonth() + 1 < 10) {
      return "0" + result;
    } else {
      return result;
    }
  };
  let neutralArray: any = [...workers];
  let preNowArray: any = [];
  let postNowArray: any = [];
  let filteredArray: any = [];

  for (let i = 0; i < neutralArray.length; i++) {
    if (neutralArray[i].birthday.substring(5) > nowDayAndMonth()) {
      postNowArray.push(neutralArray[i]);
    } else {
      preNowArray.push(neutralArray[i]);
    }
  }

  const sortingWorkersByBirthday = (arr: any) => {
    return arr.sort((a: any, b: any) =>
      a.birthday.substring(5).localeCompare(b.birthday.substring(5))
    );
  };

  filterModalValue === "alphabet"
    ? (filteredArray = [...workers].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      ))
    : (filteredArray = sortingWorkersByBirthday(postNowArray));

  const filterByParam = (arr: any) => {
    if (filterModalValue === "birthday") {
      sortingWorkersByBirthday(arr);
    }
    return arr.filter((profile: IWorker) => {
      return (
        profile.firstName.toLowerCase().includes(searchContent.toLowerCase()) ||
        profile.lastName.toLowerCase().includes(searchContent.toLowerCase()) ||
        profile.userTag.toLowerCase().includes(searchContent.toLowerCase())
      );
    });
  };

  const workersProfilesRender = (workersArr: any) => {
    return workersArr.map((worker: IWorker, i: number) => (
      <UserCard
        onClick={() => navigate("/user/" + worker.id)}
        worker={worker}
        key={i}
      />
    ));
  };

  const renderFilter = () => {
    const filtersValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
      <TabPanel key={i} value={`${i}`}>
        <div>
          {workersProfilesRender(filterByParam(filteredArray))}
          {filterModalValue === "birthday" ? <SlashYear /> : null}
          {filterModalValue === "birthday"
            ? workersProfilesRender(filterByParam(preNowArray))
            : null}
          {!(
            workersProfilesRender(filterByParam(filteredArray)).length ||
            workersProfilesRender(filterByParam(preNowArray)).length
          ) ? (
            !!searchContent ? (
              <CantFind />
            ) : null
          ) : null}
        </div>
      </TabPanel>
    ));
    return filtersValue;
  };

  return (
    <div className="WorkersField">
      {!isFetchingState ? (
        <Box sx={{ width: "100%", typography: "Inter" }}>
          <TabContext value={filterValue}>{renderFilter()}</TabContext>
        </Box>
      ) : (
        SkeletonLoad()
      )}
    </div>
  );
};

export default WorkersField;
