import { ColorValue, StyleSheet, View } from 'react-native';
import { RobotoMedium } from '@/components/texts';

interface IProps {
  text: string;
  color: ColorValue;
  value: number;
}

export const LegendItem = ({ color, text, value }: IProps) => {
  if (value !== 0) {
    return (
      <View style={styles.container}>
        <View style={[styles.square, { backgroundColor: color }]} />

        <RobotoMedium>
          {' '}
          {text} - {value}
        </RobotoMedium>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 35,
    flexDirection: 'row',
  },

  square: {
    width: 20,
    height: 20,
  },
});
