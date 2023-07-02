import { PhotosPlaceholder } from './PhotosPlaceholder';
import { Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { AnimatedImage, AnimatedView } from '@/components';
import { RootState } from '@/store';

export const Photos = () => {
  const missionDetails = useSelector((state: RootState) => state.missionDetails.missionDetails);

  if (!missionDetails?.rocket) {
    return <PhotosPlaceholder />;
  }
  return (
    <AnimatedView
      style={[styles.container, { marginBottom: missionDetails.patch?.asset.url ? 140 : 20 }]}
    >
      {missionDetails.rocket.image.asset.url && (
        <AnimatedImage
          source={{
            uri: missionDetails.rocket.image.asset.url,
          }}
          style={styles.rocketImage}
        />
      )}

      {missionDetails.patch?.asset.url && (
        <Image
          source={{
            uri: missionDetails.patch?.asset.url,
          }}
          style={styles.patch}
          resizeMode='contain'
        />
      )}
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 270,
    borderRadius: 10,
  },

  rocketImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },

  patch: {
    width: '80%',
    height: '70%',
    position: 'absolute',
    bottom: '-35%',
    left: '10%',
  },
});
