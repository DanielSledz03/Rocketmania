import AsyncStorage from '@react-native-async-storage/async-storage';
import * as types from '../Types/ThemeTypes';

export interface IThemeReducer {
  Theme: string;
}

const defaultState = (): IThemeReducer => ({
  Theme: types.SET_TO_DARK,
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case types.SET_TO_LIGHT:
      try {
        AsyncStorage.setItem('@Theme', 'Light');
      } catch (e) {
        console.log(e);
      }
      return { Theme: types.SET_TO_LIGHT };
    case types.SET_TO_DARK:
      try {
        AsyncStorage.setItem('@Theme', 'Dark');
      } catch (e) {
        console.log(e);
      }
      return { Theme: types.SET_TO_DARK };
    default:
      return state;
  }
};
