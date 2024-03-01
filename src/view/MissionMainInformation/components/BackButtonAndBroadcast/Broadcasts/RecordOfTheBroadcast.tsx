import { BroadcastStyle } from './BroadcastStyle';
import { IBroadcast } from './intreface';
import { Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RobotoBold } from '@/components/texts';

export const RecordOfTheBroadcast = ({ streamLink = '' }: IBroadcast) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(streamLink)}
      style={[BroadcastStyle.container, styles.container]}
    >
      <Image
        source={require('@/assets/images/launches/dott.png')}
        resizeMode='contain'
        style={BroadcastStyle.dott}
      />
      <View style={BroadcastStyle.centerElement}>
        <RobotoBold style={BroadcastStyle.text}>Obejrzyj zapis live</RobotoBold>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
  },
});
