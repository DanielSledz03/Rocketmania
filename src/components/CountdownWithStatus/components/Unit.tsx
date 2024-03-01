import { RobotoBold, RobotoLight } from '@components/texts';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface Props {
  value: number;
  unit: string;
}

export const Unit = ({ value, unit }: Props) => {
  return (
    <View style={styles.container}>
      <RobotoBold style={styles.value}>
        {value < 10 ? '0' + value : value} <RobotoLight style={styles.unit}>{unit}</RobotoLight>
      </RobotoBold>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    minWidth: 40,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  value: {
    fontSize: moderateScale(22),
  },

  unit: {
    fontSize: moderateScale(9),
  },
});
