import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FilterByAgency, MainTemplate, RobotoBold, SearchLaunch } from '@/components';
import { GET_ALL_LAUNCHES } from '@/constants/queries/HomePage';
import { missionsFiltersSliceActions, missionsSearchSliceActions, RootState } from '@/store';
import { ALL } from '@/store/types';
import { useFetch } from '@/utils';
import { LaunchesList } from '@/view';

export const MissionsQueque = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state: RootState) => state.missionsSearch.missions);
  const { selectedAgencyName } = useSelector((state: RootState) => state.missionsFilters);
  const [countOfFetchedMissions, setCountOfFetchedMissions] = useState(4);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { data, refetch, setLoading, loading } = useFetch(GET_ALL_LAUNCHES, {
    variables: { limit: countOfFetchedMissions },
  });

  useEffect(() => {
    if (data?.allMission) {
      dispatch(missionsSearchSliceActions.setMissions(data.allMission));
    }
  }, [data, dispatch]);

  const loadMoreData = async () => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);
    const newCount = countOfFetchedMissions + 4;
    setCountOfFetchedMissions(newCount);
    await refetch({ limit: newCount });
    setIsLoadingMore(false);
  };

  const filteredMissions = missions.filter(
    (mission) =>
      selectedAgencyName === ALL ||
      (mission.rocket.agency && mission.rocket.agency.name === selectedAgencyName),
  );

  console.log(filteredMissions?.length);

  return (
    <MainTemplate
      onRefresh={() => {
        setCountOfFetchedMissions(4);
        refetch();
        setLoading(true);
      }}
      refreshing={loading}
      onBottom={loadMoreData}
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

        <LaunchesList missions={filteredMissions} isLoadingMore={isLoadingMore} />
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
});
