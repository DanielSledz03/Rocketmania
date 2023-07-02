import { Image, View, TouchableOpacity } from 'react-native';
import { RobotoBold } from '@/components/texts';
import { BroadcastStyle } from './BroadcastStyle';
import { IBroadcast } from './intreface';

export const Livestream = ({ onPress }: IBroadcast) => {
  return (
    <TouchableOpacity onPress={onPress} style={BroadcastStyle.container}>
      <Image
        source={require('@/assets/images/launches/dott.png')}
        resizeMode='contain'
        style={BroadcastStyle.dott}
      />
      <View style={BroadcastStyle.centerElement}>
        <RobotoBold style={BroadcastStyle.text}>Trwa transmisja live</RobotoBold>
      </View>
    </TouchableOpacity>
  );
};
