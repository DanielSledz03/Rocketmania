import { HeaderOfSectionPlaceholderLayout } from './LayoutPlaceholder';
import { RobotoBold, RobotoMedium } from '@components/texts';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { AnimatedView, CountdownWithStatus, Placeholder } from '@/components';
import { RootState } from '@/store';
import { SCREEN_HEIGHT } from '@/utils';

export const HeaderOfSection = () => {
  const missionDetails = useSelector((state: RootState) => state.missionDetails.missionDetails);
  if (!missionDetails?.name) {
    return (
      <Placeholder
        containerStyle={styles.placeholderOfSection}
        layout={HeaderOfSectionPlaceholderLayout}
      />
    );
  }

  return (
    <AnimatedView style={styles.container}>
      <RobotoMedium style={styles.text}>
        MISJA: <RobotoMedium style={styles.missionName}>{missionDetails.name}</RobotoMedium>
      </RobotoMedium>
      <RobotoBold style={styles.rocketName}>{missionDetails.rocket.name}</RobotoBold>
      <CountdownWithStatus
        date={missionDetails.date}
        status={missionDetails.status}
        style={styles.countdown}
        changeLogs={missionDetails.changeLogs}
      />
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: { opacity: 1 },

  rocketName: { width: '85%', textTransform: 'uppercase' },

  text: {
    color: '#6D6D6D',
    fontSize: 16,
  },

  missionName: {
    textTransform: 'uppercase',
  },

  countdown: { height: SCREEN_HEIGHT * 0.25, width: '100%' },

  placeholderOfSection: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
