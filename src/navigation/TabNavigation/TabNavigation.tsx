import { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomBar from '../BottomBar/BottomBar';
import { IState } from '@/store/Reducers';
import { SET_TO_DARK } from '@/store/Types/ThemeTypes';
import { ThemeDark, ThemeLight } from '@/constants';
import { TabNavigation_ScreenOptions } from './TabNavigation.ScreenOptions';
import { RocketLaunchesStack, RocketLaunchesStackParamList } from '../Stacks/Launches';
import * as actionCreators from '@/store/Actions/ThemeActions';

export type RootStackParamList = {
  RocketLaunchesStack: RocketLaunchesStackParamList;
  StarshipStack: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabNavigation = () => {
  const Theme = useSelector<IState>((state) => state.themeReducer.Theme);
  const isLiveStreamModalVisible = useSelector<IState>((state) => state.youtubeModal.isVisible);
  const liveStreamModalLink = useSelector<IState>((state) => state.youtubeModal.livestreamLink);

  const dispatch = useDispatch();
  const { setToDark, setToLight } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const setTheme = async () => {
      try {
        const Theme = await AsyncStorage.getItem('@Theme');
        const isFirstLaunch = await AsyncStorage.getItem('@isFirstLaunch');

        if (Theme === null || Theme === 'Dark') {
          setToDark();
        } else if (Theme === 'Light') {
          if (!isFirstLaunch) {
            setToDark();
            try {
              AsyncStorage.setItem('@isFirstLaunch', 'false');
            } catch (e) {
              console.error(e);
            }
          } else {
            setToLight();
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
