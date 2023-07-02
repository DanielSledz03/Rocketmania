import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { AnimatedView, VehiclePreview } from '@/components';
import { RobotoBold } from '@/components/texts';
import { TextWithExpandButton } from '@/components/texts/TextWithExpandButton/TextWithExpandButton';
import { RocketLaunchesStackParamList } from '@/navigation/Stacks/Launches';
import { RootState } from '@/store';

export type LaunchDetailsNavigationProp = NativeStackNavigationProp<
  RocketLaunchesStackParamList,
  'LaunchDetails'
>;

export const InformationAboutMission = () => {
  const navigation = useNavigation<LaunchDetailsNavigationProp>();
  const missionDetails = useSelector((state: RootState) => state.missionDetails.missionDetails);
  console.log(missionDetails?.rocket.image.asset.url);
  return (
    <>
      <AnimatedView>
        {missionDetails?.description && (
          <>
            <RobotoBold>INFORMACJE O MISJI</RobotoBold>
            <TextWithExpandButton>{missionDetails.description}</TextWithExpandButton>
          </>
        )}
        <View style={styles.vehiclesPreviewContainer}>
          {missionDetails && (
            <VehiclePreview
              name={missionDetails?.rocket.name}
              title='Rakieta'
              url={{
                uri: missionDetails?.rocket.image.asset.url,
              }}
              buttonTitle='Szczegóły rakiety »'
              onPress={() =>
                navigation.navigate('RocketDetails', {
                  id: missionDetails?.rocket._id,
                })
              }
            />
          )}

          {missionDetails?.boosters &&
            missionDetails?.boosters?.length > 0 &&
            missionDetails?.boosters.map((booster) => (
              <VehiclePreview
                key={booster._id}
                url={{
                  uri: booster.image?.asset.url,
                }}
                name={booster.name}
                buttonTitle='Szczegóły Boostera »'
                title='Wykorzystywany Booster'
                onPress={() => {
                  navigation.navigate('BoosterDetails', {
                    id: booster._id,
                  });
                }}
              />
            ))}
        </View>
      </AnimatedView>
    </>
  );
};

const styles = StyleSheet.create({
  vehiclesPreviewContainer: { marginBottom: 50, marginTop: 15 },
});
