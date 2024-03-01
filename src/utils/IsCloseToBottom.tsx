import { SCREEN_HEIGHT } from './DeviceSize';
import { NativeScrollEvent } from 'react-native';

export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent): boolean => {
  const paddingToBottom = SCREEN_HEIGHT / 6;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};
