import { HomeScreen } from '@/screens/HomeScreen';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

export type RocketLaunchesStackParamList = {
  HomeScreen: undefined;
  LaunchDetails: { id: string };
  BoosterDetails: { id: string };
  RocketDetails: { id: string };
  LaunchQueue: undefined;
  InformationPage: undefined;
  Settings: undefined;
};

const RocketStack = createNativeStackNavigator<RocketLaunchesStackParamList>();

const ScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const RocketLaunchesStack = () => {
  return (
    <RocketStack.Navigator screenOptions={ScreenOptions}>
      <RocketStack.Screen name='HomeScreen' component={HomeScreen} />
      {/* <RocketStack.Screen name='LaunchDetails' component={LaunchDetail} />
      <RocketStack.Screen name='BoosterDetails' component={BoosterDetails} />
      <RocketStack.Screen name='RocketDetails' component={RocketDetails} />
      <RocketStack.Screen name='LaunchQueue' component={LaunchesQueue} />
      <RocketStack.Screen name='InformationPage' component={InformationPage} />
      <RocketStack.Screen name='Settings' component={Settings} /> */}
    </RocketStack.Navigator>
  );
};
