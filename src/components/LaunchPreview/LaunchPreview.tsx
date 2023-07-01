import { View, StyleSheet, Image, StyleProp, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { RobotoBold, RobotoRegular } from '@components/texts';
import { CountdownWithStatus } from '../CountdownWithStatus/CountdownWithStatus';
import { SCREEN_HEIGHT, useFetch } from '@/utils';
import { LaunchPreviewPlaceholderLayout } from '../LaunchPreviewPlaceholder/Layout';
import { ButtonPrimary } from '../Buttons/PrimaryButton';
import { AnimatedView } from '../AnimatedView/AnimatedView';
import { AnimatedImage } from '../AnimatedImage/AnimatedImage';
import { LaunchPreviewPlaceholder } from '../LaunchPreviewPlaceholder/LaunchPreviewPlaceholder';
import FastImage from 'react-native-fast-image';
import { Mission } from '@/types/mission';
import { getFirstLaunch } from '@/constants/Queries/HomePage';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  countdownStyle?: StyleProp<ViewStyle>;
  buttonTitle: string;
  buttonOnPress: () => void;
  mission: Mission;
  buttonStyle?: StyleProp<ViewStyle>;
  additionalButton?: boolean;
  additionalButtonOnPress?: () => void;
}

export const LaunchPreview = (props: Props) => {
  const { mission } = props;

  if (!mission) {
    return <LaunchPreviewPlaceholder containerStyle={styles.container} />;
  }

  return (
    <AnimatedView style={[styles.container, props.containerStyle]}>
      <AnimatedImage
        style={styles.image}
        source={{
          uri: mission.rocket.image.asset.url,
        }}
      />

      <FastImage style={styles.gradient} source={require('@/assets/images/Gradient.png')} />

      <View style={styles.innerContainer}>
        <RobotoRegular style={styles.upcomingMissionText}>
          {!props.additionalButton ? 'MISJA:' : 'NAJBLIŻSZA MISJA:'}{' '}
          <RobotoRegular style={styles.missionName}>{mission.name}</RobotoRegular>
        </RobotoRegular>

        <RobotoBold style={styles.rocketName}>{mission.rocket.name}</RobotoBold>

        <View style={styles.countdownStyle}>
          <CountdownWithStatus
            date={mission.date}
            style={props.countdownStyle}
            status={mission.status}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonPrimary
            title={props.buttonTitle}
            onPress={props.buttonOnPress}
            containerStyle={[styles.button, props.buttonStyle]}
            titleStyle={styles.buttonText}
          />
          {props.additionalButton ? (
            <ButtonPrimary
              title={'Szczegóły misji »'}
              onPress={props.additionalButtonOnPress}
              containerStyle={styles.additionalButton}
              titleStyle={styles.additionalButtonText}
            />
          ) : null}
        </View>
      </View>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(SCREEN_HEIGHT * 0.55),
    backgroundColor: 'rgba(26, 26, 27, 1)',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 30,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
    top: 0,
    left: 0,
    overflow: 'hidden',
  },

  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },

  innerContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
    paddingVertical: 25,
    justifyContent: 'space-around',
    overflow: 'hidden',
  },

  upcomingMissionText: {
    fontSize: moderateScale(13),
    color: '#6D6D6D',
    lineHeight: 23,
    marginBottom: 5,
  },

  missionName: {
    textTransform: 'uppercase',
  },

  rocketName: {
    width: '100%',
    lineHeight: 45,
    textTransform: 'uppercase',
    fontSize: moderateScale(34),
    marginVertical: 5,
  },

  countdownStyle: {
    width: '100%',
    height: '50%',
    justifyContent: 'space-around',
    marginTop: 10,
    alignContent: 'flex-start',
    marginLeft: -10,
  },

  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  additionalButton: {
    width: '48%',
    backgroundColor: 'background: rgba(0, 0, 0, 0.7)',
    borderColor: 'white',
    borderWidth: 1,
  },

  button: { width: '48%' },

  additionalButtonText: {
    color: 'white',
    fontSize: 14,
  },

  buttonText: { fontSize: 14 },
});