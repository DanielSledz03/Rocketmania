import { createSlice } from '@reduxjs/toolkit';
import { Mission } from '@/types/mission';

export interface missionsSearchState {
  inputValue: string;
  missions: Mission[];
}

const initialState: missionsSearchState = {
  inputValue: '',
  missions: [],
};

const missionsSearchSlice = createSlice({
  name: 'missionsSearchSlice',
  initialState,
  reducers: {
    setInputValue(state, action: { payload: string }) {
      state.inputValue = action.payload;
    },
    setMissions(state, action: { payload: Mission[] }) {
      state.missions = action.payload;
    },
  },
});

export const missionsSearchSliceActions = missionsSearchSlice.actions;
export default missionsSearchSlice.reducer;
