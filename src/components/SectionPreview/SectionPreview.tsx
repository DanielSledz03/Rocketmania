import { ImageBackground, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { RobotoBold, RobotoLight, RobotoMedium, RobotoRegular } from '@components/texts';
import { SectionPreviewProps } from './interface';
import { Placeholder } from '../Placeholder/Placeholder';
import { ButtonPrimary } from '../Buttons/PrimaryButton';
import { SCREEN_HEIGHT } from '@/utils';

export const SectionPreview = (props: SectionPreviewProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={props.photoUrl} style={styles.backgroundImage}>
        <View style={styles.innerContainer}>
          <RobotoRegular style={styles.introduction}>{props.introduction}</RobotoRegular>
          <RobotoBold style={styles.title}>{props.title}</RobotoBold>
          <View>
            {props.note ? (
              <View style={styles.lastUpdateTextBox}>
                <View style={styles.line} />
                <RobotoLight style={styles.note}>{props.note}</RobotoLight>
              </View>
            ) : (
              <Placeholder containerStyle={styles.notePlaceholder} />
            )}

            {props.description ? (
              <RobotoMedium style={styles.description}>{props.description}</RobotoMedium>
            ) : (
              <Placeholder containerStyle={styles.descriptionPlaceholder} />
            )}
          </View>
          <View style={styles.creditsContainer}>
            <RobotoLight style={styles.credits}>Photo by {props.credits}</RobotoLight>
          </View>
          <ButtonPrimary
            title={props.buttonTitle}
            titleStyle={styles.buttonText}
            containerStyle={styles.button}
            onPress={props.onPress}
            disabled={props.buttonDisabled}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(SCREEN_HEIGHT * 0.4),
    backgroundColor: '#313236',
    borderRadius: 10,
    marginBottom: 30,
    overflow: 'hidden',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
  },

  innerContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
    paddingHorizontal: 20,
    paddingBottom: 25,
    paddingTop: 15,
    justifyContent: 'space-around',
  },

  introduction: {
    fontSize: moderateScale(10),
    textTransform: 'uppercase',
  },

  title: {
    width: '100%',
    lineHeight: 50,
    textTransform: 'uppercase',
    fontSize: moderateScale(42),
  },

  lastUpdateTextBox: {
    width: '90%',
    marginBottom: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  note: {
    textTransform: 'uppercase',
    color: 'gray',
    fontSize: 11,
    minHeight: 13,
  },

  notePlaceholder: {
    width: '100%',
    height: moderateScale(15),
    marginBottom: 10,
  },

  line: { height: 1, width: 25, backgroundColor: 'gray', marginRight: 10 },

  description: {
    fontSize: 14,
    lineHeight: moderateScale(19),
    width: '75%',
    marginBottom: 10,
  },

  descriptionPlaceholder: {
    width: '100%',
    height: moderateScale(80),
    marginBottom: 10,
  },

  creditsContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  credits: {
    color: 'background: rgba(181, 181, 181, 1)',
    fontSize: moderateScale(10),
  },

  button: {
    backgroundColor: 'white',
    width: '75%',
  },

  buttonText: { color: 'black' },
});
