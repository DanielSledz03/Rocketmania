import { AnimatedView, PropertiesList } from 'components';
import React, { useState } from 'react';
import {
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  Image,
} from 'react-native';
import { RobotoLight, RobotoMedium } from 'texts';
import { SCREEN_HEIGHT } from 'utils';

interface IProps {
  payload: {
    Name: string;
    Description: string;
    Specification: string;
    Role: string;
    Photo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
  index: number;
}

export const PayloadSecond = ({ payload, index }: IProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setExpanded((prev) => !prev);
        }}
        disabled={payload.Description === null}
        style={styles.container}
      >
        <RobotoLight style={styles.indexText}>{index + 1}.</RobotoLight>
        <RobotoLight
          style={[
            styles.payloadName,
            {
              color:
                payload.Description == null
                  ? 'rgba(109, 109, 109, 1)'
                  : 'white',
            },
          ]}
        >
          {payload.Name}
        </RobotoLight>
        {payload.Specification && (
          <Image
            resizeMode="contain"
            source={
              !expanded
                ? require('images/expand/expand.png')
                : require('images/expand/expandRotated.png')
            }
            style={styles.icon}
          />
        )}
      </TouchableOpacity>

      <>
        <AnimatedView
          style={{
            height: LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            ),
            marginBottom: expanded ? 20 : 10,
          }}
        >
          {expanded && (
            <>
              {payload.Photo?.data?.attributes && (
                <Image
                  style={styles.payloadPhoto}
                  resizeMode="cover"
                  source={{
                    uri: payload.Photo?.data?.attributes?.url,
                  }}
                />
              )}

              {payload.Specification !== null && (
                <PropertiesList list={payload.Specification.split('\n')} />
              )}

              <RobotoMedium style={styles.payloadDescription}>
                {payload.Description}
              </RobotoMedium>
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
