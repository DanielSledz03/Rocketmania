import Countdown from 'react-countdown';
import { Linking, View, StyleSheet, TouchableOpacity } from 'react-native';
import { RobotoBold } from '@/components/texts';
import { BroadcastStyle } from './BroadcastStyle';
import { IBroadcast } from './intreface';

export const UpcomingBroadcast = ({ streamDate, streamLink = '' }: IBroadcast) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(streamLink)}
      style={[BroadcastStyle.container, styles.container]}
    >
      <Countdown
        date={streamDate}
        renderer={({ hours, minutes, seconds }) => {
          return (
            <View style={BroadcastStyle.centerElement}>
              <RobotoBold style={[BroadcastStyle.text, styles.text]}>
                Live zacznie się za: {hours < 10 ? '0' + hours : hours}:
                {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
              </RobotoBold>
            </View>
          );
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF0000',
  },

  text: {
    color: '#FF0000',
  },
});
