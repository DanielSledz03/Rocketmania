import { LaunchPreview } from '@/components/LaunchPreview/LaunchPreview';
import { MainTemplate } from '@/components/MainTemplate/MainTemplate';
import { SectionPreview } from '@/components/SectionPreview/SectionPreview';
import { getFirstLaunch } from '@/constants/Queries/HomePage';
import { RocketLaunchesStackParamList } from '@/navigation/Stacks/Launches';
import { useFetch } from '@/utils';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RocketLaunchesStackParamList,
  'LaunchDetails'
>;

export const HomeScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const mission = useFetch(getFirstLaunch);

  return (
    <MainTemplate
      refreshing={mission.loading}
      onRefresh={() => {
        mission.setLoading(true);
        mission.refetch();
      }}
    >
      <LaunchPreview
        mission={mission.data?.allMission[0]}
        buttonTitle='Kolejne starty »'
        buttonOnPress={() => navigation.navigate('LaunchQueue')}
        additionalButton
        additionalButtonOnPress={() =>
          navigation.navigate('LaunchDetails', {
            id: mission.data?.allMission[0]._id,
          })
        }
      />

      <SectionPreview
        title='Starship'
        note='Rakieta przyszłości'
        introduction='Nowości w Starbase'
        description='Najpotężniejsza rakieta SpaceX zmieni loty w kosmos w rutynową czynność. Pozwoli zabrać ludzkość na Marsa, a może i jeszcze dalej?'
        photoUrl={require('@/assets/images/homepage/starship.png')}
        buttonTitle='Dowiedz się więcej »'
        credits='SpaceX'
        onPress={() => null}
      />
    </MainTemplate>
  );
};
