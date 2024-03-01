import { createSlice } from '@reduxjs/toolkit';
import { Rocket } from '@/types';

export interface rocketDetailsState {
  rocketDetails: Rocket | undefined;
}

const initialState: rocketDetailsState = {
  rocketDetails: undefined,
};

const rocketDetailsSlice = createSlice({
  name: 'rocketDetailsSlice',
  initialState,
  reducers: {
    setRocketDetails(state, action: { payload: Rocket }) {
      state.rocketDetails = action.payload;
    },
  },
});

export const { setRocketDetails } = rocketDetailsSlice.actions;
export default rocketDetailsSlice.reducer;
