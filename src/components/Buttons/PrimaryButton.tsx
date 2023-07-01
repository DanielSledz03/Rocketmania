import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { InterfaceButton } from './interface';
import { RobotoBold } from '../texts';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils';

export const ButtonPrimary = ({
  title,
  onPress,
  titleStyle,
  containerStyle,
  disabled,
}: InterfaceButton) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.2}
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      <RobotoBold style={[styles.title, titleStyle]}>{title}</RobotoBold>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 1.6,
    height: SCREEN_HEIGHT / 17,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  title: {
    color: 'black',
    fontSize: 15,
  },
});
