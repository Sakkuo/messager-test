import "./Positions.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import { Tabs, ThemeProvider } from "@mui/material";
import { theme } from "../MUI/MUI";
import { dataAPI } from "../../services/DataService";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterSlice } from "../../store/reducers/FilterSlice";

const Positions = () => {
  const { filterParams, filterValue } = useAppSelector(
    (state) => state.filterReducer
  );
  const {
    data: workers,
    error,
    isFetching,
    isLoading,
  } = dataAPI.useFetchAllDataQuery(filterParams);
  const dispatch = useAppDispatch();
  const {
    changeFilter,
    changeFilteredWorkers,
    changeFilterValue,
    changeErrorState,
    changeIsLoadingState,
    changeIsFetchingState,
  } = filterSlice.actions;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch(changeFilterValue(newValue));
  };
  React.useEffect(() => {
    if (workers) {
      dispatch(changeFilteredWorkers(workers.items));
    }
  }, [workers]);


  React.useEffect(() => {
    if (error) {
      dispatch(changeErrorState(`${error}`));
    }
  }, [error]);

  React.useEffect(() => {
    dispatch(changeIsLoadingState(isLoading));
  }, [isLoading]);
  
  React.useEffect(() => {
    dispatch(changeIsFetchingState(isFetching));
  }, [isFetching]);

  return (
    <div className="Positions">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", typography: "Inter" }}>
          <TabContext value={filterValue}>
            <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={filterValue}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                className="Scroll-wrapper"
              >
                <Tab
                  value="1"
                  label="Все"
                  onClick={() => dispatch(changeFilter("all"))}
                />
                <Tab
                  value="2"
                  label="Дизайн"
                  onClick={() => dispatch(changeFilter("design"))}
                />
                <Tab
                  value="3"
                  label="Аналитика"
                  onClick={() => dispatch(changeFilter("analytics"))}
                />
                <Tab
                  value="4"
                  label="Менеджмент"
                  onClick={() => dispatch(changeFilter("management"))}
                />
                <Tab
                  value="5"
                  label="iOS"
                  onClick={() => dispatch(changeFilter("ios"))}
                />
                <Tab
                  value="6"
                  label="Android"
                  onClick={() => dispatch(changeFilter("android"))}
                />
                <Tab
                  value="7"
                  label="QA"
                  onClick={() => dispatch(changeFilter("qa"))}
                />
                <Tab
                  value="8"
                  label="Бэк-офис"
                  onClick={() => dispatch(changeFilter("back_office"))}
                />
                <Tab
                  value="9"
                  label="Frontend"
                  onClick={() => dispatch(changeFilter("frontend"))}
                />
                <Tab
                  value="10"
                  label="HR"
                  onClick={() => dispatch(changeFilter("hr"))}
                />
                <Tab
                  value="11"
                  label="PR"
                  onClick={() => dispatch(changeFilter("pr"))}
                />
                <Tab
                  value="12"
                  label="Backend"
                  onClick={() => dispatch(changeFilter("backend"))}
                />
                <Tab
                  value="13"
                  label="Техподдержка"
                  onClick={() => dispatch(changeFilter("support"))}
                />
              </Tabs>
            </Box>
          </TabContext>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Positions;
