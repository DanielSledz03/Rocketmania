import { useNavigation } from '@react-navigation/native';
import { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { RobotoRegular } from '@/components';
import { LaunchPreview } from '@/components/LaunchPreview/LaunchPreview';
import { HomeScreenNavigationProp } from '@/screens/HomeScreen';
import { RootState } from '@/store';
import { Mission } from '@/types/mission';
import { SCREEN_HEIGHT } from '@/utils';

export const LaunchesList = memo(function LaunchesList({ missions }: { missions: Mission[] }) {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { selectedAgencyName } = useSelector((state: RootState) => state.missionsFilters);

  const missionsList = useMemo(
    () =>
      missions?.map((mission: Mission) => {
        return (
          <LaunchPreview
            key={mission._id}
            mission={mission}
            buttonTitle='Szczegóły »'
            buttonStyle={styles.buttonStyle}
            buttonOnPress={() => {
              navigation.navigate('LaunchDetails', { id: mission._id });
            }}
          />
        );
      }),
    [missions, navigation],
  );

  return (
    <View style={styles.launchesListContainer}>
      {missionsList}

      {missions
        .filter((mission) => mission.rocket.Agencies)
        .filter((mission) => mission.rocket.Agencies[0].name === selectedAgencyName).length <=
        0 && (
        <View style={styles.bottomPlaceholderContainer}>
          <FastImage
            style={styles.bottomPlaceholderImage}
            resizeMode='contain'
            source={require('../../assets/images/AllRocketsImage.png')}
          />

          <RobotoRegular style={styles.bottomPlaceholderTitle}>
            Nie znaleziono startów {':('}
          </RobotoRegular>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  launchesListContainer: {
    width: '100%',
    minHeight: SCREEN_HEIGHT * 0.5,
  },

  buttonStyle: {
    width: '70%',
  },

  bottomPlaceholderContainer: {
    width: '100%',
    height: 290,
    marginTop: 30,
  },

  bottomPlaceholderTitle: {
    textTransform: 'uppercase',
    color: '#6D6D6D',
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
    fontSize: 14,
  },

  bottomPlaceholderImage: {
    flex: 1,
  },
});
