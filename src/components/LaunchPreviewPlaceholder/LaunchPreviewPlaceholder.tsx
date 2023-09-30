import { Placeholder } from '../Placeholder/Placeholder';
import { Image, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const LaunchPreviewPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/launches/placeholder_start.png')}
        style={styles.image}
      />
      <Placeholder>
        <View style={styles.placeholderWrapper}>
          <SkeletonPlaceholder.Item
            height={20}
            marginTop={25}
            marginBottom={10}
            width={'75%'}
            borderRadius={5}
          />
          <SkeletonPlaceholder.Item height={45} width={'85%'} borderRadius={5} marginBottom={35} />

          <SkeletonPlaceholder.Item height={45} width={'90%'} borderRadius={5} marginBottom={40} />
          <SkeletonPlaceholder.Item height={45} width={'75%'} borderRadius={5} marginBottom={15} />
          <SkeletonPlaceholder.Item height={30} width={'75%'} borderRadius={5} marginBottom={55} />

          <SkeletonPlaceholder.Item height={45} width={'75%'} borderRadius={5} marginBottom={0} />
        </View>
      </Placeholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    width: '100%',
    height: moderateScale(423),
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 30,
  },

  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },

  placeholderWrapper: { flexDirection: 'column', justifyContent: 'space-between' },
});
