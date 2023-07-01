import { View, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { RobotoBold, RobotoLight } from '@components/texts';

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
    width: '21%',
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
