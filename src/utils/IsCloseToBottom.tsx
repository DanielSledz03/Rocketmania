import { NativeScrollEvent } from 'react-native';
import { SCREEN_HEIGHT } from './DeviceSize';

export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent): boolean => {
  const paddingToBottom = SCREEN_HEIGHT / 6;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
