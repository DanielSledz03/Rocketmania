import { AnimatedView } from '@/components';
import { Image, View, StyleSheet } from 'react-native';
import { RobotoBold } from '@/components/texts';
import { BroadcastStyle } from './BroadcastStyle';

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
