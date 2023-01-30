import React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import { useAppSelector } from "../../hooks/redux";
import "./WorkersField.css";
import { useNavigate } from "react-router-dom";
import SkeletonLoad from "../../UI/SkeletonLoad/SkeletonLoad";
import { RenderFilter } from "./WorkersFieldRender/WorkersFieldRender";

const WorkersField: React.FC = () => {
  const { workers, filterValue, filterModalValue, searchContent, isFetchingState } =
    useAppSelector((state) => state.filterReducer);
  const navigate = useNavigate();
  
  return (
    <div className="WorkersField">
      {!isFetchingState ? (
        <Box sx={{ width: "100%", typography: "Inter" }}>
          <TabContext value={filterValue}>
            {RenderFilter(filterModalValue, searchContent, workers, navigate)}
          </TabContext>
        </Box>
      ) : (
        SkeletonLoad()
      )}
    </div>
  );
};

export default WorkersField;
