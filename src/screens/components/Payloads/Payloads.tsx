import { Payload } from './components/Payload';
import { PayloadSecond } from './components/PayloadSecond';
import { ILaunchData } from 'src/Types/LaunchInterface';
import { StyleSheet, View } from 'react-native';
import { RobotoBold } from 'texts';

export const Payloads = ({ attributes }: ILaunchData) => {
  return (
    <>
      {attributes.Payloads.data.length > 0 && (
        <>
          <RobotoBold style={styles.text}>OPIS ŁADUNKU</RobotoBold>
          <View style={styles.payloadsContainer}>
            {attributes.Payloads.data.length < 4
              ? attributes.Payloads.data.map((payload) => {
                  return <Payload key={payload.attributes.Name} payload={payload.attributes} />;
                })
              : attributes.Payloads.data
                  .sort((a: any) => {
                    if (a.payload?.Description !== null) {
                      return 1;
                    }
                    return -1;
                  })
                  .map((payload, index) => {
                    return (
                      <PayloadSecond
                        key={payload.attributes.Name}
                        payload={payload.attributes}
                        index={index}
                      />
                    );
                  })}
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: { marginTop: 30 },

  payloadsContainer: {
    width: '100%',
    marginTop: 30,
    marginBottom: 40,
  },
});
