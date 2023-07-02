import { useState } from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { AnimatedImage, ButtonExpand } from '@/components';
import { RobotoBold, RobotoMedium } from '@/components/texts';
import { Payload as IPayload } from '@/types';
import { SCREEN_HEIGHT } from '@/utils';
import { PropertiesList } from '@/view';

export const Payload = ({ payload }: { payload: IPayload }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      {payload.role === 'main_payload' ? (
        <RobotoMedium style={styles.role}>ŁADUNEK GŁÓWNY</RobotoMedium>
      ) : (
        <RobotoMedium style={styles.role}>ŁADUNEK DODATKOWY</RobotoMedium>
      )}
      <RobotoBold style={styles.payloadName}>{payload.name}</RobotoBold>
      {payload.image?.asset.url && expanded && (
        <AnimatedImage
          style={styles.payloadPhoto}
          resizeMode='cover'
          source={{
            uri: payload.image?.asset.url,
          }}
        />
      )}
      <View
        style={{
          height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
        }}
      >
        {expanded && (
          <>
            {payload.specification && <PropertiesList list={payload.specification?.split('\n')} />}
            <RobotoMedium style={styles.description}>{payload.description}</RobotoMedium>
          </>
        )}
      </View>
      <ButtonExpand
        isExpand={expanded}
        setIsExpand={setExpanded}
        style={{ marginTop: expanded ? moderateScale(30) : moderateScale(10) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginBottom: 20,
    marginTop: 10,
  },

  payloadName: {
    fontSize: 40,
    textTransform: 'uppercase',
    marginBottom: 15,
  },

  payloadPhoto: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.25,
    borderRadius: 10,
    marginTop: 10,
    position: 'relative',
    marginBottom: 20,
  },

  description: {
    marginTop: 10,
    fontSize: moderateScale(13),
    lineHeight: 22,
    fontWeight: '700',
    color: 'white',
  },

  role: {
    color: 'rgba(109, 109, 109, 1)',
    fontSize: moderateScale(14),
    textTransform: 'uppercase',
  },
});
