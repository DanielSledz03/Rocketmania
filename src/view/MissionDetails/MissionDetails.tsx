import { useState } from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ButtonExpand, Property } from '@/components';
import { RobotoBold } from '@/components/texts';
import { RootState } from '@/store';
import { translateDate } from '@/utils';
import { PropertiesList } from '@/view';

export const MissionDetails = () => {
  const missionDetails = useSelector((state: RootState) => state.missionDetails.missionDetails);
  const [expanded, setExpanded] = useState(false);
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
            {missionDetails?.date && (
              <Property
                name='Data startu'
                value={translateDate(new Date(missionDetails?.date)).full}
              />
            )}

            {missionDetails?.windowStart && missionDetails?.windowEnd && (
              <Property
                name='Okno startowe'
                value={`${translateDate(new Date(missionDetails?.windowStart)).time} - ${
                  translateDate(new Date(missionDetails?.windowEnd)).time
                }`}
              />
            )}

            {missionDetails?.probability !== null && (
              <Property name='PRAWDOPODOBIEŃSTWO LOTU' value={missionDetails?.probability + '%'} />
            )}
            {missionDetails?.specifications && (
              <PropertiesList list={missionDetails?.specifications} />
            )}
          </>
        ) : null}
      </View>

      {missionDetails?.specifications && (
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
