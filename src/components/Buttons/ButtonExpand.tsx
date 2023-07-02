import { RobotoLight } from '../texts';
import React from 'react';
import { Image, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { SCREEN_HEIGHT } from '@/utils';

interface IProps {
  setIsExpand: React.Dispatch<React.SetStateAction<boolean>>;
  isExpand: boolean;
  title?: string;
  secondTitle?: string;
  style?: StyleProp<ViewStyle>;
}

export const ButtonExpand = (props: IProps) => {
  const {
    setIsExpand,
    isExpand = false,
    title = 'ZWIŃ INFORMACJE',
    secondTitle = 'ROZWIŃ INFORMACJE',
    style,
  } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        setIsExpand((prev) => !prev);
      }}
      style={[styles.container, style]}
    >
      <View style={styles.titleContainer}>
        <RobotoLight style={styles.title}>{isExpand ? title : secondTitle}</RobotoLight>
      </View>

      <View style={styles.iconContainer}>
        <Image
          source={
            isExpand
              ? require('@/assets/images/expand/expandRotated.png')
              : require('@/assets/images/expand/expand.png')
          }
          style={styles.icon}
          resizeMode='contain'
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: SCREEN_HEIGHT * 0.05,
    backgroundColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    marginVertical: moderateScale(25),
  },

  titleContainer: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 10,
  },

  iconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: '30%',
    height: '30%',
  },
});
