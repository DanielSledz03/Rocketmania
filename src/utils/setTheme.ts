import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { setFirstLaunch } from '@/navigation/TabNavigation/TabNavigation';
import { themeSliceActions } from '@/store';

export const setTheme = async (dispatch: Dispatch) => {
  const Theme = await AsyncStorage.getItem('@Theme');
  const isFirstLaunch = await AsyncStorage.getItem('@isFirstLaunch');

  if (Theme === null || Theme === 'Dark') {
    dispatch(themeSliceActions.setToDark());
  } else if (Theme === 'Light') {
    if (!isFirstLaunch) {
      dispatch(themeSliceActions.setToDark());
      await setFirstLaunch('false');
    } else {
      dispatch(themeSliceActions.setToLight());
    }
  }
};
