import { RobotoLight } from '../texts';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface IProps {
  name: string;
  value: string;
  isLast?: boolean;
}

export const Property = ({ name, value, isLast = false }: IProps) => {
  const border = () => {
    return {
      borderTopColor: isLast ? 'rgba(109, 109, 109, 0.2)' : 'black',
      borderTopWidth: isLast ? 1 : 0,
    };
  };

  console.log(name, value);

  return (
    <View style={[styles.container, border()]}>
      <View style={styles.box}>
        <RobotoLight style={styles.text}>{name}</RobotoLight>
      </View>
      <View style={styles.box}>
        <RobotoLight style={styles.value}>{value}</RobotoLight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: moderateScale(40),
    borderBottomColor: 'rgba(109, 109, 109, 0.2)',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  box: {
    flex: 1,
    width: '50%',
    minHeight: moderateScale(40),
    justifyContent: 'center',
  },

  text: {
    textTransform: 'uppercase',
    color: '#6D6D6D',
    width: '90%',
    marginVertical: 10,
    fontWeight: '400',
    fontSize: moderateScale(11),
    lineHeight: moderateScale(15),
  },

  value: {
    fontWeight: '700',
    fontSize: moderateScale(13),
    lineHeight: 20,
    marginVertical: 10,
  },
});
