import { useNavigation } from '@react-navigation/native';
import { AnimatedView, TextWithExpandButton, VehiclePreview } from 'components';
import { View, StyleSheet, Alert } from 'react-native';
import { ILaunchData } from 'src/Types/LaunchInterface';
import { RobotoBold } from 'texts';

export const InformationAboutMission = ({ attributes }: ILaunchData) => {
  const navigation = useNavigation();
  return (
    <>
      <AnimatedView>
        {attributes.Description && (
          <>
            <RobotoBold>INFORMACJE O MISJI</RobotoBold>
            <TextWithExpandButton>
              {attributes.Description}
            </TextWithExpandButton>
          </>
        )}
        <View style={styles.vehiclesPreviewContainer}>
          <VehiclePreview
            name={attributes.Rocket.data.attributes.Name}
            title="Rakieta"
            url={{
              uri: attributes.Rocket.data.attributes.MainImage.data.attributes
                .url,
            }}
            buttonTitle="Szczegóły rakiety »"
            onPress={() =>
              navigation.navigate('RocketDetails', {
                id: attributes.Rocket.data.id,
              })
            }
          />

          {attributes.Boosters.data[0] && (
            <VehiclePreview
              url={{
                uri: attributes.Boosters.data[0].attributes.Photo.data
                  .attributes.url,
              }}
              name={attributes.Boosters.data[0].attributes.Name}
              buttonTitle="Szczegóły Boostera »"
              title="Wykorzystywany Booster"
              onPress={() => {
                navigation.navigate('BoosterDetails', {
                  id: attributes.Boosters.data[0].attributes.id,
                });
              }}
            />
          )}
        </View>
      </AnimatedView>
    </>
  );
};

const styles = StyleSheet.create({
  vehiclesPreviewContainer: { marginBottom: 50, marginTop: 15 },
});
