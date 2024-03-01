import StageSelect from './components/StageSelect/StageSelect';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { RobotoBold } from '@/components';

export const Stages = () => {
  return (
    <>
      <RobotoBold style={styles.title}>STOPNIE RAKIETY</RobotoBold>
      <StageSelect />
    </>
  );
};

const styles = StyleSheet.create({
  title: { marginTop: 30, marginBottom: moderateScale(10) },
});
