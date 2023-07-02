import { Image, View, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { RobotoBold } from '@/components/texts';
import { BroadcastStyle } from './BroadcastStyle';
import { IBroadcast } from './intreface';

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