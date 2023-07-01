import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { LaunchPreviewPlaceholderLayout } from './Layout';
import React from 'react';
import { Placeholder } from '../Placeholder/Placeholder';

interface Props {
  containerStyle: StyleProp<ViewStyle>;
}

export const LaunchPreviewPlaceholder = ({ containerStyle }: Props) => {
  return (
    <View style={containerStyle}>
      <Image
        source={require('@/assets/images/launches/placeholder_start.png')}
        style={styles.image}
      />
      <Placeholder
        layout={LaunchPreviewPlaceholderLayout}
        containerStyle={styles.skeletonContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '90%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },

  skeletonContent: {
    flex: 1,
    paddingVertical: 25,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingLeft: 10,
  },
});
