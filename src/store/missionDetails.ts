import { Mission } from '@/types/mission';
import { createSlice } from '@reduxjs/toolkit';

export interface missionsDetailsState {
  missionDetails: Mission | undefined;
}

const initialState: missionsDetailsState = {
  missionDetails: undefined,
};

const missionsDetailsSlice = createSlice({
  name: 'missionsDetailsSlice',
  initialState,
  reducers: {
    setMissionDetails(state, action: { payload: Mission }) {
      state.missionDetails = action.payload;
    },
  },
});

export const missionsDetailsSliceActions = missionsDetailsSlice.actions;
export default missionsDetailsSlice.reducer;
