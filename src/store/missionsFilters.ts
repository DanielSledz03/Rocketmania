import { ALL } from './Types/AgencyNames';
import { createSlice } from '@reduxjs/toolkit';

export interface missionsFiltersState {
  selectedAgencyName: string;
  isAgencyListExpanded: boolean;
}

const initialState: missionsFiltersState = {
  selectedAgencyName: ALL,
  isAgencyListExpanded: false,
};

const missionsFiltersSlice = createSlice({
  name: 'missionsFiltersSlice',
  initialState,
  reducers: {
    setSelectedAgencyName(state, action: { payload: string }) {
      state.selectedAgencyName = action.payload;
    },
    toggleAgencyListExpand(state) {
      state.isAgencyListExpanded = !state.isAgencyListExpanded;
    },
    setAgencyListExpand(state, action: { payload: boolean }) {
      state.isAgencyListExpanded = action.payload;
    },
  },
});

export const missionsFiltersSliceActions = missionsFiltersSlice.actions;
export default missionsFiltersSlice.reducer;
