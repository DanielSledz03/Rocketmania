import { createSlice } from '@reduxjs/toolkit';
import { SET_TO_DARK, SET_TO_LIGHT } from './Types/ThemeTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface themeState {
  theme: string;
}

const initialState: themeState = {
  theme: SET_TO_DARK,
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    setToDark(state) {
      try {
        AsyncStorage.setItem('@Theme', 'Dark');
      } catch (e) {
        console.log(e);
      }
      state.theme = SET_TO_DARK;
    },

    setToLight(state) {
      try {
        AsyncStorage.setItem('@Theme', 'Light');
      } catch (e) {
        console.log(e);
      }
      state.theme = SET_TO_LIGHT;
    },
  },
});

export const themeSliceActions = themeSlice.actions;
export default themeSlice.reducer;
