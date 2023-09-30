import AsyncStorage from '@react-native-async-storage/async-storage';

export const setFirstAppLaunch = async (value: string) => {
  await AsyncStorage.setItem('@isFirstLaunch', value);
};
