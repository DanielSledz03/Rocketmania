import { ColorValue, StyleSheet, View } from 'react-native';
import { RobotoLight, RobotoRegular } from '@/components/texts';

interface IProps {
  date: string;
  color: ColorValue;
  name: string;
}

export const LatestLaunch = ({ date, color, name }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.line} />
        <RobotoLight style={styles.date}>{date}</RobotoLight>
      </View>
      <View style={styles.bottomContainer}>
        <View style={[styles.dott, { backgroundColor: color }]} />
        <RobotoRegular style={styles.name}>{name}</RobotoRegular>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 10 },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },

  date: { color: 'gray', fontSize: 12 },

  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
  },

  dott: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },

  name: { fontSize: 15 },

  line: {
    height: 1,
    width: 25,
    backgroundColor: 'gray',
    marginRight: 10,
  },
});
