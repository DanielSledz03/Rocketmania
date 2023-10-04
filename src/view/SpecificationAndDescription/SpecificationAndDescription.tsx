import { PropertiesList } from '../PropertiesList/PropertiesList';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { TextWithExpandButton } from '@/components/texts/TextWithExpandButton/TextWithExpandButton';
import { RootState } from '@/store';

export const SpecificationAndDescription = () => {
  const rocket = useSelector((state: RootState) => state.rocketDetails.rocketDetails);
  if (!rocket) return <View />;
  return (
    <View>
      {rocket?.generalInformations && rocket.agency && (
        <PropertiesList
          containerStyle={styles.propertiesList}
          list={rocket.generalInformations
            .split('\n')
            .concat([rocket.agency.name ? 'Agencja: ' + rocket.agency.name : ''])
            .filter((item) => item != '' || item.length > 0)}
        />
      )}
      <TextWithExpandButton>{rocket.description}</TextWithExpandButton>
    </View>
  );
};

const styles = StyleSheet.create({
  propertiesList: {
    marginTop: 20,
    borderTopColor: 'rgba(109, 109, 109, 0.2)',
    borderWidth: 1,
  },
});
