import { createSlice } from '@reduxjs/toolkit';
import { Mission } from '@/types/mission';

export interface missionsDetailsState {
  missionDetails: Mission | undefined;
  livestreamStatus: string;
  livestreamDate: string;
}

const initialState: missionsDetailsState = {
  missionDetails: undefined,
  livestreamStatus: '',
  livestreamDate: '',
};

const missionsDetailsSlice = createSlice({
  name: 'missionsDetailsSlice',
  initialState,
  reducers: {
    setMissionDetails(state, action: { payload: Mission }) {
      state.missionDetails = action.payload;
    },

    setLivestreamStatus(state, action: { payload: string }) {
      state.livestreamStatus = action.payload;
    },

    setLivestreamDate(state, action: { payload: string }) {
      state.livestreamDate = action.payload;
    },
  },
});

export const missionsDetailsSliceActions = missionsDetailsSlice.actions;
export default missionsDetailsSlice.reducer;
