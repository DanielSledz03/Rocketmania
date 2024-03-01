import { StyleSheet } from 'react-native';

export const BroadcastStyle = StyleSheet.create({
  container: {
    width: '60%',
    height: '60%',
    backgroundColor: 'rgba(255, 0, 0, 1)',
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },

  dott: {
    height: 8,
    width: 8,
  },

  liveStreamStatus: {
    fontSize: 12,
  },

  centerElement: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    textTransform: 'uppercase',
    fontSize: 13,
  },
});
