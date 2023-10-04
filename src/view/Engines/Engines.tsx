import { EngineSelect } from './components/EngineSelect';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { RobotoBold } from '@/components';

export const Engines = () => {
  return (
    <>
      <RobotoBold style={styles.title}>SILNIKI</RobotoBold>
      <EngineSelect />
    </>
  );
};

const styles = StyleSheet.create({
  title: { marginTop: 30, marginBottom: moderateScale(10) },
});
