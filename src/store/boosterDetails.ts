import { Booster, Mission } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export interface boosterDetailsState {
  boosterDetails: Booster | undefined;
  boosterMissions: Mission[] | [];
}

const initialState: boosterDetailsState = {
  boosterDetails: undefined,
  boosterMissions: [],
};

const boosterDetailsSlice = createSlice({
  name: 'boosterDetailsSlice',
  initialState,
  reducers: {
    setBoosterDetails(state, action: { payload: Booster }) {
      state.boosterDetails = action.payload;
    },
    setBoosterMissions(state, action: { payload: Mission[] }) {
      state.boosterMissions = action.payload;
    },
  },
});

export const { setBoosterDetails, setBoosterMissions } = boosterDetailsSlice.actions;
export default boosterDetailsSlice.reducer;
