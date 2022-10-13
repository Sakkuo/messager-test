import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorker } from "../../models/IWorker";

interface FilterState {
  filterParams: string;
  workers: IWorker[];
  filterValue: string,
  isModalOpen: boolean,
  filterModalValue: string
}

const initialState: FilterState = {
  filterParams: 'all',
  workers: [],
  filterValue: '1',
  isModalOpen: false,
  filterModalValue: 'alphabet'
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.filterParams = action.payload
    },
    changeFilteredWorkers(state, action: PayloadAction<IWorker[]>) {
      state.workers = action.payload
    },
    changeFilterValue(state, action: PayloadAction<string>) {
      state.filterValue = action.payload
    },
    setModalState(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload
    },
    changeFilterModalValue(state, action: PayloadAction<string>) {
      state.filterModalValue = action.payload
    },
  }
})


export default filterSlice.reducer