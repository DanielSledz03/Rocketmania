import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainTemplate } from '@/components';
import { GET_ROCKET_DETAILS } from '@/constants/queries/RocketDetails';
import { RootState } from '@/store';
import { setRocketDetails } from '@/store/rocketDetails';
import { useFetch } from '@/utils';
import { CompletedMissions } from '@/view/CompletedMissions/CompletedMissions';
import { Engines } from '@/view/Engines/Engines';
import { HeaderWithGallery } from '@/view/HeaderWithGallery/HeaderWithGallery';
import { SpecificationAndDescription } from '@/view/SpecificationAndDescription/SpecificationAndDescription';
import { Stages } from '@/view/Stages/Stages';

export const RocketDetails = ({
  route,
}: {
  route: {
    params: { id: string };
  };
}) => {
  const dispatch = useDispatch();
  const response = useFetch(GET_ROCKET_DETAILS, {
    variables: { id: route.params.id },
  });
  const rocket = useSelector((state: RootState) => state.rocketDetails.rocketDetails);

  useEffect(() => {
    if (response?.data) {
      dispatch(setRocketDetails(response.data.allRocket[0]));
    }
  }, [dispatch, response.data]);

  return (
    <MainTemplate
      refreshing={response.loading}
      onRefresh={() => {
        response.refetch();
        response.setLoading(true);
      }}
    >
      <HeaderWithGallery />
      {response.data && (
        <>
          <SpecificationAndDescription />
          {rocket?.stages && <Stages />}
          {rocket?.engines && <Engines />}
          <CompletedMissions />
        </>
      )}
    </MainTemplate>
  );
};
