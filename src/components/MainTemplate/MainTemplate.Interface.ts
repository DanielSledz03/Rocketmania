import { ViewPropsAndroid } from 'react-native';

export interface MainTemplateProps {
  children: React.ReactNode;
  containerContentStyles?: ViewPropsAndroid;
  containerStyle?: ViewPropsAndroid;
  onRefresh?: Function;
  refreshing?: boolean;
  onBottom?: Function;
}
