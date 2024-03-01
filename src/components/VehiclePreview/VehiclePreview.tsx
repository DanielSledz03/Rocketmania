import { ButtonPrimary } from '../Buttons/PrimaryButton';
import { RobotoBold, RobotoLight } from '../texts';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface IProps {
  url: any;
  name: string;
  onPress: () => void;
  buttonTitle: string;
  title: string;
}

export const VehiclePreview = ({ url, name, onPress, buttonTitle, title }: IProps) => {
  return (
    <ImageBackground
      source={url?.uri ? { uri: url?.uri } : url}
      style={styles.container}
      resizeMode='cover'
    >
      <Image source={require('@/assets/images/launches/Gradient.png')} style={styles.gradient} />
      <View style={styles.innerContainer}>
        <RobotoLight style={styles.text}>{title}</RobotoLight>

        <RobotoBold style={styles.rocketName}>{name}</RobotoBold>

        <ButtonPrimary
          title={buttonTitle}
          onPress={onPress}
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(280, 0.1),
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
    position: 'relative',
  },

  innerContainer: {
    width: '100%',
    height: '100%',
    padding: 15,
  },

  text: {
    fontSize: 12,
    textTransform: 'uppercase',
  },

  rocketName: {
    fontSize: 38,
    width: '80%',
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    bottom: moderateScale(30),
    left: 15,
  },

  buttonText: {
    color: 'white',
  },

  gradient: { width: '100%', height: '100%', position: 'absolute' },
});
