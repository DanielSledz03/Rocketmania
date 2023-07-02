import { TabNavigation_ScreenOptions } from './TabNavigation.ScreenOptions';
import BottomBar from '../BottomBar/BottomBar';
import { RocketLaunchesStack, RocketLaunchesStackParamList } from '../Stacks/Launches';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeDark, ThemeLight } from '@/constants';
import { RootState } from '@/store/store';
import { themeSliceActions } from '@/store/theme';
import { SET_TO_DARK } from '@/store/Types/ThemeTypes';

export type RootStackParamList = {
  RocketLaunchesStack: RocketLaunchesStackParamList;
  StarshipStack: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabNavigation = () => {
  const Theme = useSelector<RootState>((state) => state.theme.theme);
  // const isLiveStreamModalVisible = useSelector<RootState>((state) => state.youtubeModal.isVisible);
  // const liveStreamModalLink = useSelector<RootState>((state) => state.youtubeModal.livestreamLink);

  const dispatch = useDispatch();

  useEffect(() => {
    const setTheme = async () => {
      try {
        const Theme = await AsyncStorage.getItem('@Theme');
        const isFirstLaunch = await AsyncStorage.getItem('@isFirstLaunch');

        if (Theme === null || Theme === 'Dark') {
          dispatch(themeSliceActions.setToDark());
        } else if (Theme === 'Light') {
          if (!isFirstLaunch) {
            dispatch(themeSliceActions.setToDark());

            try {
              AsyncStorage.setItem('@isFirstLaunch', 'false');
            } catch (e) {
              console.error(e);
            }
          } else {
            dispatch(themeSliceActions.setToLight());
          }
        }
        if (isFirstLaunch === null) {
          try {
            AsyncStorage.setItem('@isFirstLaunch', 'false');
          } catch (e) {
            console.error(e);
          }
        }
      } catch (e) {
        console.error(e);
      }
    };

    setTheme();
  }, []);

  return (
    <NavigationContainer theme={Theme === SET_TO_DARK ? ThemeDark : ThemeLight}>
      <Tab.Navigator screenOptions={TabNavigation_ScreenOptions} tabBar={BottomBar}>
        <Tab.Screen component={RocketLaunchesStack} name='RocketLaunchesStack' />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
