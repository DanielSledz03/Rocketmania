import { TabNavigation_ScreenOptions } from './TabNavigation.ScreenOptions';
import BottomBar from '../BottomBar/BottomBar';
import { RocketLaunchesStack, RocketLaunchesStackParamList } from '../Stacks/Launches';
import { StarshipStack, StarshipStackParamList } from '../Stacks/Starship';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeDark, ThemeLight } from '@/constants';
import { RootState } from '@/store/store';
import { SET_TO_DARK } from '@/store/Types/ThemeTypes';
import { setFirstAppLaunch } from '@/utils/setFirstAppLaunch';
import { setTheme } from '@/utils/setTheme';

export type RootStackParamList = {
  RocketLaunchesStack: RocketLaunchesStackParamList;
  StarshipStack: StarshipStackParamList;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabNavigation = () => {
  const Theme = useSelector<RootState>((state) => state.theme.theme);
  // const isLiveStreamModalVisible = useSelector<RootState>((state) => state.youtubeModal.isVisible);
  // const liveStreamModalLink = useSelector<RootState>((state) => state.youtubeModal.livestreamLink);
  const dispatch = useDispatch();
  useEffect(() => {
    setTheme(dispatch);
    setFirstAppLaunch('false');
  }, [dispatch]);

  return (
    <NavigationContainer theme={Theme === SET_TO_DARK ? ThemeDark : ThemeLight}>
      <Tab.Navigator screenOptions={TabNavigation_ScreenOptions} tabBar={BottomBar}>
        <Tab.Screen component={RocketLaunchesStack} name='RocketLaunchesStack' />
        <Tab.Screen component={StarshipStack} name='StarshipStack' />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
