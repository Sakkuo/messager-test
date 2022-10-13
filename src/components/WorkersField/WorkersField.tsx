import React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { IWorker } from "../../models/IWorker";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import UserCard from "../../UI/UserCard/UserCard";
import "./WorkersField.css";

const WorkersField: React.FC = () => {
  const { workers, filterParams, filterValue } = useAppSelector(
    (state) => state.filterReducer
  );

  const workersProfiles = workers?.map((worker: IWorker, i) => (
    <UserCard worker={worker} key={i} />
  ));
  const renderFilter = () => {
    const filtersValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
      <TabPanel key={i} value={`${i}`}>
        {workersProfiles}
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
