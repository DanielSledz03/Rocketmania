import { BroadcastStyle } from './BroadcastStyle';
import { Image, StyleSheet, View } from 'react-native';
import { AnimatedView } from '@/components';
import { RobotoBold } from '@/components/texts';

export const NoLiveBroadcast = () => {
  return (
    <AnimatedView style={[BroadcastStyle.container, styles.container]}>
      <Image
        source={require('@/assets/images/launches/dott.png')}
        resizeMode='contain'
        style={BroadcastStyle.dott}
      />
      <View style={BroadcastStyle.centerElement}>
        <RobotoBold style={BroadcastStyle.text}>Brak transmisji live</RobotoBold>
      </View>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
  },
});
