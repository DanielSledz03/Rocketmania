import { Placeholder } from '../Placeholder/Placeholder';
import { RobotoLight } from '../texts';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT } from '@/utils';

interface IProps {
  text: string;
  boldText: string;
}

export const BackButtonAndPath = ({ text, boldText }: IProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image
          source={require('../../assets/images/back.png')}
          resizeMode='contain'
          style={styles.backButtonIcon}
        />
      </TouchableOpacity>

      <View style={styles.pathContainer}>
        {boldText ? (
          <RobotoLight style={styles.text1}>
            {text}
            <RobotoLight style={styles.rocketNameInPath}>{boldText}</RobotoLight>
          </RobotoLight>
        ) : (
          <Placeholder>
            <View />
          </Placeholder>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  backButton: {
    height: '70%',
    width: '10%',
  },

  backButtonIcon: {
    height: '100%',
    width: '100%',
  },

  pathContainer: {
    width: '85%',
    height: '60%',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },

  text1: {
    fontSize: 11,
    color: 'rgba(109, 109, 109, 1)',
    textTransform: 'uppercase',
  },

  rocketNameInPath: {
    color: 'rgba(109, 109, 109, 1)',
    fontWeight: '800',
    fontSize: 11,
    textTransform: 'uppercase',
  },

  skeletonContent: {
    width: '100%',
    height: '100%',
  },
});
