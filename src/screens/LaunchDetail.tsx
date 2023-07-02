import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MainTemplate } from '@/components';
import { GET_LAUNCH_BY_ID } from '@/constants/Queries/HomePage';
import { missionsDetailsSliceActions } from '@/store';
import { useFetch } from '@/utils';
import { InformationAboutMission, MissionDetails, MissionMainInformation, Payloads } from '@/view';

export const LaunchDetail = (props: {
  route: {
    params: { id: string };
  };
}) => {
  const dispatch = useDispatch();
  const { data, setLoading, loading, refetch } = useFetch(GET_LAUNCH_BY_ID, {
    variables: { id: props.route.params.id },
  });

  useEffect(() => {
    dispatch(missionsDetailsSliceActions.setMissionDetails(data?.allMission[0]));
  }, [data, dispatch]);

  return (
    <MainTemplate
      refreshing={loading}
      onRefresh={() => {
        setLoading(true);
        refetch();
      }}
    >
      <MissionMainInformation />
      <InformationAboutMission />
      <MissionDetails />
      <Payloads />
    </MainTemplate>
  );
};
