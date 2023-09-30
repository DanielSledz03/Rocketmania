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

interface CountdownWithStatusProps {
  targetDate: Date;
  style: StyleProp<ViewStyle>;
  countdownStyles?: StyleProp<ViewStyle>;
  missionStatus: string;
  changeLogs?: string[];
}

export const CountdownWithStatus = (props: CountdownWithStatusProps) => {
  const { targetDate, style, countdownStyles, missionStatus, changeLogs } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const missionDate = new Date(targetDate);

  const changeLogsArray = changeLogs
    ? changeLogs.map((item, index, array) => {
        return (
          <TimeLineItem
            key={index}
            date={item.split(': ')[0]}
            text={item.split(': ')[1]}
            isLast={index + 1 === array.length ? true : false}
          />
        );
      })
    : [];

  return (
    <>
      <View style={[styles.container, style]}>
        <Countdown
          status={missionStatus}
          targetDate={targetDate}
          style={[styles.countdown, countdownStyles]}
        />
        <View style={styles.statusAndDateBox}>
          <View style={styles.fullWidth}>
            <View style={styles.missionStatusBox}>
              <View style={styles.line} />

              <RobotoLight style={styles.uppercase}>STATUS MISJI</RobotoLight>
            </View>
            <View style={styles.fullWidth}>
              <SpaceGroteskBold
                style={[styles.status, { color: StatusProps(missionStatus).color }]}
              >
                {StatusProps(missionStatus).text}
              </SpaceGroteskBold>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setIsExpanded((prev) => !prev)}
            style={styles.fullWidth}
          >
            <View style={styles.missionDateContainer}>
              <View style={styles.line} />

              <RobotoLight style={styles.missionDate}>Data startu</RobotoLight>
            </View>
            <View style={styles.dateBox}>
              <RobotoMedium>{getDate(missionDate, missionStatus).text}</RobotoMedium>
              {changeLogs && (
                <Image
                  resizeMode='contain'
                  source={
                    isExpanded
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
          {isExpanded && changeLogsArray}
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

  countdown: { height: 45, marginBottom: '5%' },

  fullWidth: {
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

  missionDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 2,
  },

  missionDate: {
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
