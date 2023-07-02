import { useNavigation } from '@react-navigation/native';
import { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { LaunchPreview } from '@/components/LaunchPreview/LaunchPreview';
import { HomeScreenNavigationProp } from '@/screens/HomeScreen';
import { Mission } from '@/types/mission';
import { SCREEN_HEIGHT } from '@/utils';

export const LaunchesList = memo(function LaunchesList({ missions }: { missions: Mission[] }) {
  const navigation = useNavigation<HomeScreenNavigationProp>();
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
    [missions],
  );

  return (
    <View style={styles.launchesListContainer}>
      {missionsList}

      {/* {LAUNCHES?.missions?.meta.pagination.total === LAUNCHES?.missions?.data?.length && (
        <View style={styles.bottomPlaceholderContainer}>
          <Image
            style={styles.bottomPlaceholderImage}
            source={require('images/AllRocketsImage.png')}
          />
          <RobotoRegular style={styles.bottomPlaceholderTitle}>Reszta już odleciała</RobotoRegular>
        </View>
      )} */}
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  bottomPlaceholderTitle: {
    textTransform: 'uppercase',
    color: '#6D6D6D',
  },

  bottomPlaceholderImage: {
    width: '70%',
    resizeMode: 'contain',
  },
});
