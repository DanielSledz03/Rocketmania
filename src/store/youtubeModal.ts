import { createSlice } from '@reduxjs/toolkit';

export interface youtubeModalState {
  isVisible: boolean;
  livestreamLink: string;
}

const initialState: youtubeModalState = {
  isVisible: false,
  livestreamLink: '',
};

const youtubeModalSlice = createSlice({
  name: 'youtubeModalSlice',
  initialState,
  reducers: {
    setLivestreamLink(state, action: { payload: string }) {
      state.livestreamLink = action.payload;
    },
    toggleYoutubeModal(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const youtubeModalSliceActions = youtubeModalSlice.actions;
export default youtubeModalSlice.reducer;
