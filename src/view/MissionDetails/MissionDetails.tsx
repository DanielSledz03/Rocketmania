import { useState } from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ButtonExpand, Property } from '@/components';
import { RobotoBold } from '@/components/texts';
import { RootState } from '@/store';
import { translateDate } from '@/utils';
import { PropertiesList } from '@/view';

export const MissionDetails = () => {
  const [expanded, setExpanded] = useState(false);
  const missionDetails = useSelector((state: RootState) => state.missionDetails.missionDetails);

  const propertiesContainerStyles: any = [
    styles.propertiesContainer,
    {
      borderTopColor: expanded ? 'rgba(109, 109, 109, 0.2)' : 'transparent',
      height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
    },
  ];

  return (
    <>
      {missionDetails?.specifications && <RobotoBold>SZCZEGÓŁY MISJI</RobotoBold>}
      <View style={propertiesContainerStyles}>
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
              <PropertiesList
                list={missionDetails?.specifications
                  .split('\n')
                  .filter((item) => item != '' || item.length > 0)}
              />
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
    borderWidth: 1,
    marginTop: 30,
  },
});
