import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { moderateScale } from 'react-native-size-matters';
import { MainTemplate, RobotoMedium } from '@/components';
export const InProgress = () => {
  return (
    <MainTemplate>
      <RobotoMedium style={styles.heading}>Sekcja w trakcie budowy</RobotoMedium>
      <FastImage
        style={styles.image}
        resizeMode='contain'
        source={require('@/assets/images/launches/RocketPlaceholder.png')}
      />
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: moderateScale(55),
    marginVertical: 30,
    textTransform: 'uppercase',
  },

  image: {
    width: '100%',
    height: 300,
  },
});
