import { StyleSheet, View } from 'react-native';
import { AnimatedImage, AnimatedView } from '@/components';
import { RobotoBold, RobotoLight, RobotoMedium } from '@/components/texts';
import { SCREEN_HEIGHT } from '@/utils';
import { PropertiesList } from '@/view/PropertiesList/PropertiesList';

interface IProps {
  selectedValue: {
    Name: string;
    Photo: {
      url: string;
    };
    Specification: string[];
    Description: string;
  };
}

export const PreviewStageSelect = ({ selectedValue }: IProps) => {
  return (
    <AnimatedView style={styles.previewContainer}>
      <View style={{ marginBottom: 15 }}>
        <RobotoLight style={styles.engineText}>STOPIEŃ RAKIETY</RobotoLight>
        <RobotoBold style={styles.textUppercase}>{selectedValue.Name}</RobotoBold>
      </View>
      {selectedValue.Photo?.url && (
        <AnimatedImage
          source={{
            uri: selectedValue.Photo.url,
          }}
          style={styles.image}
        />
      )}
      <PropertiesList containerStyle={styles.propertiesList} list={selectedValue.Specification} />
      <RobotoMedium style={styles.description}>{selectedValue.Description}</RobotoMedium>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    backgroundColor: 'black',
    marginTop: 30,
  },

  image: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.3,
    position: 'relative',
  },

  propertiesList: {
    marginVertical: 20,
    borderTopColor: 'rgba(109, 109, 109, 0.2)',
    borderWidth: 1,
  },

  description: {
    lineHeight: 22,
    marginBottom: 10,
  },

  textUppercase: {
    textTransform: 'uppercase',
  },

  engineText: { color: '#6D6D6D', fontSize: 15 },
});
