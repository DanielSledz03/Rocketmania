import { SelectOption } from './components/SelectOption';
import { RobotoRegular } from '@components/texts';
import { useCallback } from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { missionsFiltersSliceActions } from '@/store/missionsFilters';
import { RootState } from '@/store/store';
import { ALL, ESA, NASA, ROCKET_LAB, ROSCOSMOS, SPACEX, ULA } from '@/store/Types/AgencyNames';

const agencies = [SPACEX, ESA, ULA, ROSCOSMOS, ROCKET_LAB, NASA];

export const FilterByAgency = () => {
  const dispatch = useDispatch();
  const { selectedAgencyName, isAgencyListExpanded } = useSelector(
    (state: RootState) => state.missionsFilters,
  );

  const toggleAgencyListExpand = useCallback(() => {
    dispatch(missionsFiltersSliceActions.toggleAgencyListExpand());
  }, [dispatch]);

  const setSelectedAgencyName = useCallback(
    (name: string) => {
      dispatch(missionsFiltersSliceActions.setSelectedAgencyName(name));
      toggleAgencyListExpand();
    },
    [dispatch, toggleAgencyListExpand],
  );

  return (
    <View style={styles.container}>
      <RobotoRegular>Filtruj:</RobotoRegular>
      <View
        style={[
          styles.filterSelectContainer,
          { height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut) },
        ]}
      >
        {!isAgencyListExpanded && (
          <SelectOption
            title={selectedAgencyName}
            onPress={toggleAgencyListExpand}
            isExpand={isAgencyListExpanded}
            isFirst
          />
        )}
        {isAgencyListExpanded && (
          <SelectOption
            title='Wszystkie'
            onPress={() => setSelectedAgencyName(ALL)}
            isFirst
            isExpand={isAgencyListExpanded}
          />
        )}
        {isAgencyListExpanded &&
          agencies.map((item) => (
            <SelectOption key={item} title={item} onPress={() => setSelectedAgencyName(item)} />
          ))}
      </View>
    </View>
  );
};

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
