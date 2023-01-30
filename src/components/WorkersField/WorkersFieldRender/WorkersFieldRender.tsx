import { NavigateFunction } from "react-router-dom";
import TabPanel from "@mui/lab/TabPanel";
import { IWorker } from "../../../models/IWorker";
import SlashYear from "../../../UI/SlashYear/SlashYear";
import UserCard from "../../../UI/UserCard/UserCard";
import CantFind from "../../CantFind/CantFind";

const nowDayAndMonth = () => {
  const nowDate = new Date();
  const result = `${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
  if (nowDate.getMonth() + 1 < 10) {
    return "0" + result;
  } else {
    return result;
  }
};

const SortingWorkersByBirthday = (arr: any) => {
  return arr.sort((a: any, b: any) =>
    a.birthday.substring(5).localeCompare(b.birthday.substring(5))
  );
};

const WorkersProfilesRender = (workersArr: any, navigate: NavigateFunction) => {
  return workersArr.map((worker: IWorker, i: number) => (
    <UserCard
      onClick={() => navigate("/user/" + worker.id)}
      worker={worker}
      key={i}
    />
  ));
};

const FilterByParam = (
  arr: any,
  filterModalValue: string,
  searchContent: string
) => {
  if (filterModalValue === "birthday") {
    SortingWorkersByBirthday(arr);
  }
  return arr.filter((profile: IWorker) => {
    return (
      profile.firstName.toLowerCase().includes(searchContent.toLowerCase()) ||
      profile.lastName.toLowerCase().includes(searchContent.toLowerCase()) ||
      profile.userTag.toLowerCase().includes(searchContent.toLowerCase())
    );
  });
};

export const RenderFilter = (
  filterModalValue: string,
  searchContent: string,
  workers: IWorker[],
  navigate: NavigateFunction
) => {
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

  filterModalValue === "alphabet"
    ? (filteredArray = [...workers].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      ))
    : (filteredArray = SortingWorkersByBirthday(postNowArray));

  const filtersValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
    <TabPanel key={i} value={`${i}`}>
      <div>
        {WorkersProfilesRender(
          FilterByParam(filteredArray, filterModalValue, searchContent),
          navigate
        )}
        {filterModalValue === "birthday" &&
        !!WorkersProfilesRender(
          FilterByParam(preNowArray, filterModalValue, searchContent),
          navigate
        ).length ? (
          <SlashYear />
        ) : null}
        {filterModalValue === "birthday"
          ? WorkersProfilesRender(
              FilterByParam(preNowArray, filterModalValue, searchContent),
              navigate
            )
          : null}
        {!(
          WorkersProfilesRender(
            FilterByParam(filteredArray, filterModalValue, searchContent),
            navigate
          ).length ||
          WorkersProfilesRender(
            FilterByParam(preNowArray, filterModalValue, searchContent),
            navigate
          ).length
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
