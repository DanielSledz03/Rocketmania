import { RobotoMedium } from '@components/texts';
import { StyleSheet, View } from 'react-native';

interface Props {
  date: string;
  text: string;
  isLast: boolean;
}

export const TimeLineItem = ({ date, text, isLast = false }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineAndDottContainer}>
        <View style={styles.dott} />

        {!isLast && <View style={styles.line} />}
      </View>
      <View style={styles.textContainer}>
        <RobotoMedium style={styles.date}>{date}</RobotoMedium>
        <RobotoMedium>{text}</RobotoMedium>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    position: 'relative',
    flexDirection: 'row',
  },

  lineAndDottContainer: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dott: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F5B308',
  },

  line: { width: 1, height: '95%', backgroundColor: 'gray' },

  textContainer: {
    width: '95%',
    paddingLeft: '5%',
    justifyContent: 'flex-start',
  },

  date: {
    fontSize: 15,
    lineHeight: 15,
    color: '#6D6D6D',
    marginBottom: 5,
  },
});
