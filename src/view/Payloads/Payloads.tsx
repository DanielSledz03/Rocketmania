import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { Payload } from './components/Payload';
import { PayloadSecond } from './components/PayloadSecond';
import { RobotoBold } from '@/components/texts';
import { RootState } from '@/store';

export const Payloads = memo(function Payloads() {
  const payloads = useSelector((state: RootState) => state.missionDetails.missionDetails?.payload);

  const payloadsList = useMemo(() => {
    if (!payloads || payloads.length === 0) return null;

    return payloads.length < 4
      ? payloads.map((payload,i,array) => <Payload key={payload._id} payload={payload} defaultExpand={array.length === 1}/>)
      : payloads
          .sort((a, b) => (b.description ? -1 : 1)) // Sort by presence of description, moving those with descriptions to the front
          .map((payload, index, array) => <PayloadSecond key={payload.name} payload={payload} index={index} defaultExpand={array.length === 1}/>);
  }, [payloads]);

  if (!payloadsList) return null;

  return (
    <>
      <RobotoBold style={styles.text}>OPIS ŁADUNKU</RobotoBold>
      <View style={styles.payloadsContainer}>{payloadsList}</View>
    </>
  );
});

const styles = StyleSheet.create({
  text: { marginTop: 30 },
  payloadsContainer: {
    width: '100%',
    marginTop: 30,
    marginBottom: 40,
  },
});
