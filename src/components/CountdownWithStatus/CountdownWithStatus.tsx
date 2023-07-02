import { Countdown } from './components/Countdown';
import { TimeLineItem } from './components/TimelineItem';
import { RobotoLight, RobotoMedium, SpaceGroteskBold } from '@components/texts';
import { useState } from 'react';
import {
  Animated,
  Image,
  LayoutAnimation,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { getDate, StatusProps } from '@/utils';

interface Props {
  date: string;
  style: StyleProp<ViewStyle>;
  countdownStyles?: StyleProp<ViewStyle>;
  status: string;
  changeLogs?: string[];
}

export const CountdownWithStatus = (props: Props) => {
  const { date, style, countdownStyles, status, changeLogs } = props;
  const [expanded, setExpanded] = useState(false);
  const LaunchDate = new Date(date);
  return (
    <>
      <View style={[styles.container, style]}>
        <Countdown status={status} date={date} style={[styles.countdown, countdownStyles]} />
        <View style={styles.statusAndDateBox}>
          <View style={styles.width100}>
            <View style={styles.missionStatusBox}>
              <View style={styles.line} />

              <RobotoLight style={styles.uppercase}>STATUS MISJI</RobotoLight>
            </View>
            <View style={styles.width100}>
              <SpaceGroteskBold style={[styles.status, { color: StatusProps(status).color }]}>
                {StatusProps(status).text}
              </SpaceGroteskBold>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setExpanded((prev) => !prev)}
            style={styles.width100}
          >
            <View style={styles.launchDateContainer}>
              <View style={styles.line} />

              <RobotoLight style={styles.launchDate}>Data startu</RobotoLight>
            </View>
            <View style={styles.dateBox}>
              <RobotoMedium>{getDate(LaunchDate, status).text}</RobotoMedium>
              {changeLogs && (
                <Image
                  resizeMode='contain'
                  source={
                    expanded
                      ? require('@/assets/images/expand/expandRotated.png')
                      : require('@/assets/images/expand/expand.png')
                  }
                  style={styles.icon}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {changeLogs && (
        <Animated.View
          style={{
            height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
          }}
        >
          {expanded &&
            changeLogs.map((item, index, array) => {
              return (
                <TimeLineItem
                  key={index}
                  date={item.split(': ')[0]}
                  text={item.split(': ')[1]}
                  isLast={index + 1 === array.length ? true : false}
                />
              );
            })}
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  countdown: { height: '25%', marginBottom: '5%' },

  width100: {
    width: '100%',
  },

  uppercase: {
    textTransform: 'uppercase',
  },

  line: { height: 1, width: 25, backgroundColor: 'gray', marginRight: 10 },

  statusAndDateBox: {
    width: '100%',
    height: '55%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },

  missionStatusBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 2,
  },

  status: {
    fontWeight: '700',
    fontSize: moderateScale(22),
  },

  launchDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 2,
  },

  launchDate: {
    textTransform: 'uppercase',
    color: 'white',
  },

  dateBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: { width: 15, height: 15, marginLeft: 10 },
});
