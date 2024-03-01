import { useState } from 'react';
import { Image, LayoutAnimation, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedView } from '@/components';
import { RobotoLight, RobotoMedium } from '@/components/texts';
import { Payload as IPayload } from '@/types';
import { SCREEN_HEIGHT } from '@/utils';
import { PropertiesList } from '@/view';

export const PayloadSecond = ({ payload, index }: { payload: IPayload; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setExpanded((prev) => !prev);
        }}
        disabled={payload.description === null}
        style={styles.container}
      >
        <RobotoLight style={styles.indexText}>{index + 1}.</RobotoLight>
        <RobotoLight
          style={[
            styles.payloadName,
            {
              color: payload.description == null ? 'rgba(109, 109, 109, 1)' : 'white',
            },
          ]}
        >
          {payload.name}
        </RobotoLight>
        {payload.specification && (
          <Image
            resizeMode='contain'
            source={
              !expanded
                ? require('@/assets/images/expand/expand.png')
                : require('@/assets/images/expand/expandRotated.png')
            }
            style={styles.icon}
          />
        )}
      </TouchableOpacity>

      <>
        <AnimatedView
          style={{
            height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
            marginBottom: expanded ? 20 : 10,
          }}
        >
          {expanded && (
            <>
              {payload.image?.asset.url && (
                <Image
                  style={styles.payloadPhoto}
                  resizeMode='cover'
                  source={{
                    uri: payload.image?.asset.url,
                  }}
                />
              )}

              {payload.specification && <PropertiesList list={payload.specification.split('\n')} />}

              <RobotoMedium style={styles.payloadDescription}>{payload.description}</RobotoMedium>
            </>
          )}
        </AnimatedView>
      </>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    height: 30,
    alignItems: 'center',
  },

  indexText: {
    fontSize: 18,
    width: '10%',
    color: 'rgba(109, 109, 109, 1)',
  },

  payloadName: {
    textTransform: 'uppercase',
    fontSize: 18,
  },

  icon: {
    height: '100%',
    width: '4%',
    position: 'absolute',
    right: 0,
  },

  payloadPhoto: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.25,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 20,
  },

  payloadDescription: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: 'white',
    marginTop: 5,
  },
});
