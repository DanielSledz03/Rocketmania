import { Placeholder } from '../Placeholder/Placeholder';
import { RobotoLight, RobotoRegular } from '../texts';
import { useState } from 'react';
import { Alert, ImageStyle, StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage, { ResizeMode, Source } from 'react-native-fast-image';

interface Props {
  style: ImageStyle;
  source: Source | { uri: string };
  resizeMode?: ResizeMode;
  credits?: string;
}

export const AnimatedImage = ({ style, source, resizeMode, credits = '' }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  if (error) {
    return (
      <View style={[styles.errorScreen, styles.screen, style]}>
        <RobotoLight style={styles.errorScreenText}>Błąd ładowania zdjęcia</RobotoLight>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onLongPress={() => Alert.alert('Long Press', 'Kiedyś tu będzie podgląd tego zdjęcia')}
        activeOpacity={1}
        style={styles.screen}
      >
        <FastImage
          style={styles.image}
          source={
            source?.uri
              ? {
                  uri: source?.uri,
                }
              : source
          }
          onLoadEnd={() => {
            setIsLoaded(true);
          }}
          onError={() => {
            setError(true);
          }}
          resizeMode={resizeMode}
        />
        {credits?.length > 0 && (
          <RobotoRegular style={styles.credits}>Photo by {credits}</RobotoRegular>
        )}
      </TouchableOpacity>
      {!isLoaded && <Placeholder containerStyle={[styles.skeletonContent, style]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },

  screen: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  errorScreen: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },

  errorScreenText: { color: 'red', fontSize: 15 },

  skeletonContent: {
    borderRadius: 10,
    position: 'absolute',
  },

  credits: { position: 'absolute', bottom: 10, right: 10, fontSize: 10 },
});
