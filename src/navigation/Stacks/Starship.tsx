import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { InProgress } from '@/screens/InProgress';

export type StarshipStackParamList = {
  InProgress: undefined;
};

const StarshipStackNavigator = createNativeStackNavigator<StarshipStackParamList>();

const ScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const StarshipStack = () => {
  return (
    <StarshipStackNavigator.Navigator screenOptions={ScreenOptions}>
      <StarshipStackNavigator.Screen name='InProgress' component={InProgress} />
    </StarshipStackNavigator.Navigator>
  );
};
