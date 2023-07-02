import { AnimatedImage, ButtonExpand, PropertiesList } from 'components';
import React, { useState } from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { RobotoBold, RobotoMedium } from 'texts';
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
}

export const Payload = ({ payload }: IProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      {payload.Role === 'MainPayload' ? (
        <RobotoMedium style={styles.role}>ŁADUNEK GŁÓWNY</RobotoMedium>
      ) : (
        <RobotoMedium style={styles.role}>ŁADUNEK DODATKOWY</RobotoMedium>
      )}
      <RobotoBold style={styles.payloadName}>{payload.Name}</RobotoBold>
      {payload.Photo?.data?.attributes && expanded && (
        <AnimatedImage
          style={styles.payloadPhoto}
          resizeMode="cover"
          source={{
            uri: payload.Photo.data.attributes.url,
          }}
        />
      )}
      <View
        style={{
          height: LayoutAnimation.configureNext(
            LayoutAnimation.Presets.easeInEaseOut,
          ),
        }}
      >
        {expanded && (
          <>
            <PropertiesList list={payload.Specification?.split('\n')} />
            <RobotoMedium style={styles.description}>
              {payload.Description}
            </RobotoMedium>
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
