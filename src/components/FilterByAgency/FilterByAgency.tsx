import { SelectOption } from './components/SelectOption';
import { RobotoRegular } from '@components/texts';
import { memo } from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { missionsFiltersSliceActions } from '@/store/missionsFilters';
import { RootState } from '@/store/store';
import { ALL, ESA, NASA, ROCKET_LAB, ROSCOSMOS, SPACEX, ULA } from '@/store/Types/AgencyNames';

export const FilterByAgency = memo(function FilterByAgency() {
  const dispatch = useDispatch();
  const { selectedAgencyName, isAgencyListExpanded } = useSelector(
    (state: RootState) => state.missionsFilters,
  );

  return (
    <View style={styles.container}>
      <RobotoRegular>Filtruj:</RobotoRegular>
      <View
        style={{
          ...styles.filterSelectContainer,
          height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
        }}
      >
        {!isAgencyListExpanded && (
          <SelectOption
            title={selectedAgencyName}
            onPress={() => {
              dispatch(missionsFiltersSliceActions.toggleAgencyListExpand());
            }}
            isExpand={isAgencyListExpanded}
            isFirst
          />
        )}
        {isAgencyListExpanded && (
          <SelectOption
            title='Wszystkie'
            onPress={() => {
              if (isAgencyListExpanded) {
                dispatch(missionsFiltersSliceActions.setSelectedAgencyName(ALL));
                dispatch(missionsFiltersSliceActions.toggleAgencyListExpand());
              } else {
                dispatch(missionsFiltersSliceActions.toggleAgencyListExpand());
              }
            }}
            isFirst
            isExpand={isAgencyListExpanded}
          />
        )}
        {isAgencyListExpanded &&
          [SPACEX, ESA, ULA, ROSCOSMOS, ROCKET_LAB, NASA].map((item) => (
            <SelectOption
              key={item}
              title={item}
              onPress={() => {
                dispatch(missionsFiltersSliceActions.setSelectedAgencyName(item));
                dispatch(missionsFiltersSliceActions.toggleAgencyListExpand());
              }}
            />
          ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: '100%',
    zIndex: 999,
    position: 'relative',
    marginBottom: 50,
  },

  filterSelectContainer: {
    backgroundColor: 'black',
    position: 'relative',
    width: '100%',
    minHeight: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 5,
  },
});
