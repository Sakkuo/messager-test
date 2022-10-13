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

const WorkersField: React.FC = () => {
  const { workers, filterValue, filterModalValue, searchContent } = useAppSelector(
    (state) => state.filterReducer
  );
  let filteredArray: any = [];

  const nowDate = new Date();
  const nowDayAndMonth = `${nowDate.getMonth() + 1}-${nowDate.getDate()}`;

  let neutralArray: any = [...workers];
  let preNowArray: any = [];
  let postNowArray: any = [];
  let filterBySearchDefault: any = [];
  let filterBySearchBirthday: any = [];

  for (let i = 0; i < neutralArray.length; i++) {
    if (neutralArray[i].birthday.substring(5) > nowDayAndMonth) {
      postNowArray.push(neutralArray[i]);
    } else {
      preNowArray.push(neutralArray[i]);
    }
  }

  postNowArray.sort((a: any, b: any) =>
    a.birthday.substring(5).localeCompare(b.birthday.substring(5))
  );
  preNowArray.sort((a: any, b: any) =>
    a.birthday.substring(5).localeCompare(b.birthday.substring(5))
  );

  filterModalValue === "alphabet"
    ? (filteredArray = [...workers].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      ))
    : (filteredArray = postNowArray);

  filterBySearchDefault = filteredArray?.filter((profile: IWorker) => {
    return (
      profile.firstName.toLowerCase().includes(searchContent.toLowerCase()) ||
      profile.lastName.toLowerCase().includes(searchContent.toLowerCase()) ||
      profile.userTag.toLowerCase().includes(searchContent.toLowerCase())
    );
  });
  filterBySearchBirthday = preNowArray?.filter((profile: IWorker) => {
    return (
      profile.firstName.toLowerCase().includes(searchContent.toLowerCase()) ||
      profile.lastName.toLowerCase().includes(searchContent.toLowerCase()) ||
      profile.userTag.toLowerCase().includes(searchContent.toLowerCase())
    );
  });

  // const filterBySearch = filteredArray?.filter((profile: { fitstName: string }) => {
  //   return profile.fitstName.toLowerCase().includes(searchContent.toLowerCase());
  // });

  const workersProfilesDefault = filterBySearchDefault?.map(
    (worker: IWorker, i: number) => <UserCard worker={worker} key={i} />
  );
  const workersProfilesBirthday = filterBySearchBirthday?.map((worker: IWorker, i: number) => (
    <UserCard worker={worker} key={i} />
  ));

  console.log((workersProfilesDefault.length || workersProfilesBirthday.length) && !!searchContent)

  // console.log( !!workersProfilesBirthday )
  console.log(!!searchContent)

  const renderFilter = () => {
    const filtersValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
      <TabPanel key={i} value={`${i}`}>
        <div>
          {workersProfilesDefault}

          {filterModalValue === "birthday" ? <SlashYear /> : null}
          {filterModalValue === "birthday" ? workersProfilesBirthday : null}
          {!(workersProfilesDefault.length || workersProfilesBirthday.length) ? !!searchContent ?  <CantFind/> : null : null}
        </div>
      </TabPanel>
    ));
    return filtersValue;
  };

  return (
    <div className="WorkersField">
      <Box sx={{ width: "100%", typography: "Inter" }}>
        <TabContext value={filterValue}>{renderFilter()}</TabContext>
      </Box>
    </div>
  );
};

export default WorkersField;
