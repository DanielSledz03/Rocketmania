import { Payload } from './components/Payload';
import { PayloadSecond } from './components/PayloadSecond';
import { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RobotoBold } from '@/components/texts';
import { RootState } from '@/store';
import { Payload as IPayload } from '@/types';

export const Payloads = memo(function Payloads() {
  const missionDetails = useSelector((state: RootState) => state.missionDetails.missionDetails);

  const payloadsList = useMemo(() => {
    if (missionDetails?.payload)
      return missionDetails?.payload.length < 4
        ? missionDetails?.payload.map((payload) => {
            return <Payload key={payload._id} payload={payload} />;
          })
        : missionDetails.payload
            .sort((a: IPayload) => {
              if (a?.description !== null) {
                return 1;
              }
              return -1;
            })
            .map((payload, index) => {
              return <PayloadSecond key={payload.name} payload={payload} index={index} />;
            });
  }, [missionDetails?.payload]);

  return (
    <>
      {missionDetails?.payload && missionDetails?.payload.length > 0 && (
        <>
          <RobotoBold style={styles.text}>OPIS ŁADUNKU</RobotoBold>
          <View style={styles.payloadsContainer}>{payloadsList}</View>
        </>
      )}
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
