import { MainTemplate } from '@/components';
import { GET_LAUNCH_BY_ID } from '@/constants/Queries/HomePage';
import { missionsDetailsSliceActions } from '@/store';
import { useFetch } from '@/utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MissionMainInformation } from '../view/MissionMainInformation/MissionMainInformation';

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
  }, [data]);

  console.log(data);

  return (
    <MainTemplate
      refreshing={loading}
      onRefresh={() => {
        setLoading(true);
        refetch();
      }}
    >
      <MissionMainInformation />
      {/* {attributes && (
        <>
          <InformationAboutMission attributes={attributes} />
          <MissionDetails attributes={attributes} />
          <Payloads attributes={attributes} />
        </>
      )} */}
    </MainTemplate>
  );
};
