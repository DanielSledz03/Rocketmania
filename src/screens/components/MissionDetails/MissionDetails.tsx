import { ILaunchData } from 'src/Types/LaunchInterface';
import { ButtonExpand, PropertiesList, Property } from 'components';
import { useState } from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { RobotoBold } from 'texts';
import { translateDate } from 'utils';

export const MissionDetails = ({ attributes }: ILaunchData) => {
  const [expanded, setExpanded] = useState(
    attributes.Specification.split('\n').length <= 4 ? true : false,
  );
  return (
    <>
      <RobotoBold>SZCZEGÓŁY MISJI</RobotoBold>
      <View
        style={[
          styles.propertiesContainer,
          {
            borderTopColor: expanded ? 'rgba(109, 109, 109, 0.2)' : 'transparent',
            height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
          },
        ]}
      >
        {expanded ? (
          <>
            <Property name='Data startu' value={translateDate(attributes.Date).full} />

            {attributes.LaunchWindow && (
              <Property name='Okno startowe' value={attributes.LaunchWindow} />
            )}

            {attributes.Probability !== null && (
              <Property name='PRAWDOPODOBIEŃSTWO LOTU' value={attributes.Probability + '%'} />
            )}
            <PropertiesList list={attributes.Specification.split('\n')} />
          </>
        ) : null}
      </View>

      {attributes.Specification.split('\n').length > 4 && (
        <ButtonExpand
          setIsExpand={setExpanded}
          isExpand={expanded}
          style={{ marginTop: expanded ? 20 : 0 }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  propertiesContainer: {
    height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
    borderWidth: 1,
    marginTop: 30,
  },
});
