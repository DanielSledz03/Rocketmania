import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LaunchPreview } from '@/components/LaunchPreview/LaunchPreview';
import { MainTemplate } from '@/components/MainTemplate/MainTemplate';
import { SectionPreview } from '@/components/SectionPreview/SectionPreview';
import { GET_INCOMING_LAUNCH } from '@/constants/Queries/HomePage';
import { RocketLaunchesStackParamList } from '@/navigation/Stacks/Launches';
import { useFetch } from '@/utils';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RocketLaunchesStackParamList,
  'HomeScreen'
>;

export const HomeScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const mission = useFetch(GET_INCOMING_LAUNCH);

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
        buttonOnPress={() => navigation.navigate('MissionsQueque')}
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
        introduction='Sekcja w trakcie budowy 🚀'
        description='Najpotężniejsza rakieta SpaceX zmieni loty w kosmos w rutynową czynność. Pozwoli zabrać ludzkość na Marsa, a może i jeszcze dalej?'
        photoUrl={require('@/assets/images/homepage/starship.png')}
        buttonTitle='W trakcie budowy ⚙️'
        credits='SpaceX'
        onPress={() => {
          navigation.navigate('InProgress');
        }}
      />
    </MainTemplate>
  );
};
