import { RootStackParamList } from '../RootStack';
import { ImageSourcePropType } from 'react-native';

export interface TabBarIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  iconFocused: ImageSourcePropType;
  title: string;
  stackName: string;
}

export interface IconTemplateProps {
  icon: ImageSourcePropType;
  title: string;
  focused: boolean;
  stackName: RootStackParamList;
}
