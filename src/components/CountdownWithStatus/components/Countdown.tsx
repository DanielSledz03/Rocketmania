import { useEffect, useState } from 'react';
import CountdownFromNPM from 'react-countdown';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { RobotoBold } from '@components/texts';
import { Unit } from './Unit';

interface Props {
  style: StyleProp<ViewStyle>;
  date: any;
  status: string;
}

const calculateDiff = (date: Date) => {
  const date1: any = new Date(date);
  const now: any = new Date();
  // get total seconds between the times
  let delta = Math.abs(date1 - now) / 1000;

  // calculate (and subtract) whole days
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  return {
    days,
    hours,
    minutes,
    seconds: Math.round(delta),
    miliseconds: Math.abs(date1 - now) / 1000,
  };
};

export const Countdown = ({ style, date, status }: Props) => {
  const [diffTime, setDiffTime] = useState(calculateDiff(date));
  useEffect(() => {
    const interval = setInterval(() => {
      const difference = calculateDiff(date);
      if (difference.miliseconds !== diffTime.miliseconds) {
        if (new Date(date) < new Date() && status == 'InFlight') {
          setDiffTime(difference);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (new Date(date) < new Date() && status == 'InFlight') {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.tContainer}>
          <RobotoBold style={styles.text}>T+</RobotoBold>
        </View>

        <Unit value={diffTime.days} unit='dni' />
        <Unit value={diffTime.hours} unit='godz.' />
        <Unit value={diffTime.minutes} unit='min.' />
        <Unit value={diffTime.seconds} unit='sek.' />
      </View>
    );
  }

  return (
    <CountdownFromNPM
      date={status === 'Success' || status === 'Failed' ? new Date().toJSON() : date}
      renderer={({ hours, days, seconds, minutes, api }) => {
        if (status === 'Hold') {
          api.pause();
        }

        return (
          <View style={[styles.container, style]}>
            <View style={styles.tContainer}>
              <RobotoBold style={styles.text}>T-</RobotoBold>
            </View>

            <Unit value={days} unit='dni' />
            <Unit value={hours} unit='godz.' />
            <Unit value={minutes} unit='min.' />
            <Unit value={seconds} unit='sek.' />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '12%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  tContainer: {
    height: '100%',
    width: '16%',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  text: {
    fontSize: moderateScale(22),
  },
});
