import { ColorValue, StyleSheet, View } from 'react-native';
import { RobotoMedium } from '../texts';

interface IProps {
  date: string;
  missionName: string;
  launchPad: string;
  landingPad: string;
  isLast: boolean;
  dottColor: ColorValue;
}

export const TimeLineItem = (props: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftInnerContainer}>
        <View style={[styles.dott, { backgroundColor: props.dottColor }]} />
        {!props.isLast && <View style={styles.line} />}
      </View>
      <View style={styles.rightInnerContainer}>
        <RobotoMedium style={styles.date}>{props.date}</RobotoMedium>
        <RobotoMedium>{props.missionName}</RobotoMedium>
        <RobotoMedium>Launch Pad: {props.launchPad}</RobotoMedium>
        <RobotoMedium>Miejsce lądowania: {props.landingPad}</RobotoMedium>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    position: 'relative',
    flexDirection: 'row',
  },

  leftInnerContainer: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rightInnerContainer: {
    width: '95%',
    paddingLeft: '5%',
    justifyContent: 'flex-start',
  },

  line: { width: 1, height: '95%', backgroundColor: 'gray' },

  dott: { width: 12, height: 12, borderRadius: 6 },

  date: {
    fontSize: 15,
    lineHeight: 15,
    color: '#6D6D6D',
    marginBottom: 5,
  },
});
