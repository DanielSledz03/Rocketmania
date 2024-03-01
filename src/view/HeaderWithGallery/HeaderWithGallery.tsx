import { SectionPlaceholder } from './components/SectionPlaceholder';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { AnimatedView, RobotoBold } from '@/components';
import { BackButtonAndPath } from '@/components/BackButtonAndPath/BackButtonAndPath';
import { RootState } from '@/store';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils';

export const HeaderWithGallery = () => {
  const rocket = useSelector((state: RootState) => state.rocketDetails.rocketDetails);

  return (
    <>
      <BackButtonAndPath text='BAZA WIEDZY / RAKIETY / ' boldText={rocket ? rocket.name : ''} />
      {!rocket?.name ? (
        <SectionPlaceholder />
      ) : (
        <AnimatedView>
          <RobotoBold style={styles.header1}>{rocket.name}</RobotoBold>
          <View style={styles.galleryContainer}>
            <Image
              source={{
                uri: rocket.image.asset.url,
              }}
              style={styles.mainPhoto}
            />
            {rocket.gallery && rocket.gallery.length > 1 && (
              <ScrollView
                scrollEnabled={rocket.gallery.length > 2}
                horizontal
                contentContainerStyle={styles.sliderContentContainer}
                style={styles.slider}
              >
                {rocket.gallery.map((photo) => (
                  <Image
                    key={photo.image.asset.url}
                    source={{
                      uri: photo.image.asset.url,
                    }}
                    style={styles.sliderPhoto}
                    resizeMode='cover'
                  />
                ))}
              </ScrollView>
            )}
          </View>
        </AnimatedView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header1: {
    textTransform: 'uppercase',
    marginBottom: 20,
  },

  galleryContainer: {
    width: '100%',
    marginTop: 10,
  },

  mainPhoto: {
    width: '100%',
    height: SCREEN_HEIGHT / 3.5,
    borderRadius: 5,
    marginBottom: 15,
    position: 'relative',
  },
  sliderContentContainer: { justifyContent: 'space-around' },

  slider: {
    width: '100%',
    height: SCREEN_WIDTH / 2.4,
  },

  sliderPhoto: {
    width: SCREEN_WIDTH / 2.4,
    height: '100%',
    marginRight: 15,
    borderRadius: 5,
  },
});
