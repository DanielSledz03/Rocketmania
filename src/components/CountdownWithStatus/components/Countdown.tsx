import { Unit } from './Unit';
import { useEffect, useState } from 'react';
import CountdownFromNPM from 'react-countdown';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { RobotoBold } from '@/components/texts';
import { calculateTimeDifference } from '@/utils';

interface CountdownProps {
  style: StyleProp<ViewStyle>;
  targetDate: Date;
  status: string;
}

export const Countdown = ({ style, targetDate, status }: CountdownProps) => {
  const [timeDifference, setTimeDifference] = useState(calculateTimeDifference(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeDifference = calculateTimeDifference(targetDate);
      if (newTimeDifference.miliseconds !== timeDifference.miliseconds) {
        if (new Date(targetDate) < new Date() && status === 'InFlight') {
          setTimeDifference(newTimeDifference);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [status, targetDate, timeDifference]);

  if (new Date(targetDate) < new Date() && status === 'InFlight') {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.tContainer}>
          <RobotoBold style={styles.text}>T+</RobotoBold>
        </View>

        <Unit value={timeDifference.days} unit='dni' />
        <Unit value={timeDifference.hours} unit='godz.' />
        <Unit value={timeDifference.minutes} unit='min.' />
        <Unit value={timeDifference.seconds} unit='sek.' />
      </View>
    );
  }

  return (
    <CountdownFromNPM
      date={status === 'Success' || status === 'Failed' ? new Date().toJSON() : targetDate}
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
    height: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  tContainer: {
    height: '100%',
    width: 20,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 10,
  },

  text: {
    fontSize: moderateScale(22),
  },
});
