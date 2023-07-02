import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FilterByAgency, MainTemplate, RobotoBold, SearchLaunch } from '@/components';
import { GET_ALL_LAUNCHES } from '@/constants/Queries/HomePage';
import { missionsFiltersSliceActions, missionsSearchSliceActions, RootState } from '@/store';
import { ALL } from '@/store/Types';
import { useFetch } from '@/utils';
import { LaunchesList } from '@/view';

export const MissionsQueque = () => {
  const dispatch = useDispatch();
  const { data, refetch, setLoading, loading } = useFetch(GET_ALL_LAUNCHES);
  const missions = useSelector((state: RootState) => state.missionsSearch.missions);
  const { selectedAgencyName } = useSelector((state: RootState) => state.missionsFilters);

  useEffect(() => {
    if (data?.allMission) dispatch(missionsSearchSliceActions.setMissions(data.allMission));
  }, [data]);

  return (
    <MainTemplate
      onRefresh={() => {
        refetch();
        setLoading(true);
      }}
      refreshing={loading}
      onBottom={() => {}}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          dispatch(missionsFiltersSliceActions.setAgencyListExpand(false));
        }}
      >
        <RobotoBold>KOLEJKA STARTÓW</RobotoBold>
        <View
          style={{
            ...styles.filtersContainer,
            marginBottom: missions?.length <= 0 ? 0 : 30,
          }}
        >
          <FilterByAgency />
          <SearchLaunch />
        </View>

        <LaunchesList
          missions={
            selectedAgencyName === ALL
              ? missions
              : missions.filter((mission) => mission.rocket.Agencies[0].name === selectedAgencyName)
          }
        />
        {/* 
        {loading &&
          data?.missions?.meta.pagination.total !==
            data?.missions?.data?.length(
              <RobotoBold style={styles.loadingText}>Ładowanie..</RobotoBold>,
            )} */}
      </TouchableOpacity>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  filtersContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 75,
    marginTop: 10,
    zIndex: 999,
  },

  loadingText: {
    fontSize: 15,
    paddingVertical: 25,
    textAlign: 'center',
  },
});
