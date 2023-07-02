import { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { RobotoRegular } from '@/components/texts';

interface IProps {
  title: string;
  isFirst?: boolean;
  isExpand?: boolean;
  onPress?: () => void;
}

export const SelectOption = memo(function SelectOption({
  title,
  isFirst,
  isExpand,
  onPress,
}: IProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.selectOptionContainer}>
      <RobotoRegular style={styles.selectOptionTitle}>{title}</RobotoRegular>
      {isFirst && (
        <View style={styles.selectOptionExpand}>
          {isExpand ? (
            <FastImage
              source={require('@/assets/images/expand/expandRotated.png')}
              resizeMode='contain'
              style={styles.selectOptionExpandIcon}
            />
          ) : (
            <FastImage
              source={require('@/assets/images/expand/expand.png')}
              resizeMode='contain'
              style={styles.selectOptionExpandIcon}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  selectOptionContainer: {
    width: '100%',
    height: 45,
    marginLeft: 10,
    justifyContent: 'center',
    position: 'relative',
  },

  selectOptionTitle: {
    textTransform: 'uppercase',
    fontSize: 11,
  },

  selectOptionExpandIcon: {
    width: '100%',
    height: '100%',
  },

  selectOptionExpand: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 20,
  },
});
