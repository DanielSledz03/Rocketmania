import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';

export const TabNavigation_ScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarLabelStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 12,
  },
  tabBarStyle: {
    borderTopWidth: 0,
    height: '11%',
    backgroundColor: 'transparent',
    paddingBottom: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'space-between',

    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: Dimensions.get('window').width,
    zIndex: 8,
  },
  tabBarItemStyle: {
    justifyContent: 'space-around',
  },

  tabBarInactiveTintColor: '#8C8C8C',

  tabBarLabelPosition: 'below-icon',
};
