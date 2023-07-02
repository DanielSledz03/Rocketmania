import { Image, StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils';

export const PhotosPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/launches/RocketPlaceholder.png')}
        style={styles.rocketImage}
        resizeMode='cover'
      />

      <View style={styles.patchPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 270,
    borderRadius: 10,
    marginBottom: SCREEN_HEIGHT / 4,
    marginTop: scale(20),
  },

  rocketImage: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 10,
    height: 270,
  },

  patchPlaceholder: {
    backgroundColor: 'rgba(26, 26, 27, 1)',
    width: SCREEN_WIDTH / 2.5,
    height: SCREEN_WIDTH / 2.5,
    position: 'absolute',
    bottom: -SCREEN_WIDTH / 5,
    left: SCREEN_WIDTH / 3.75,
    borderRadius: SCREEN_WIDTH / 2.5 / 2,
  },
});
