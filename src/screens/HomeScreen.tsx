import { LaunchPreview } from '@/components/LaunchPreview/LaunchPreview';
import { MainTemplate } from '@/components/MainTemplate/MainTemplate';
import { SectionPreview } from '@/components/SectionPreview/SectionPreview';
import { RocketLaunchesStackParamList } from '@/navigation/Stacks/Launches';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RocketLaunchesStackParamList,
  'LaunchDetails'
>;

const getData = async () => {
  const data = await fetch(
    "https://voux0k38.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'launch'%5D",
  )
    .then((res) => res)
    .then((data) => data)
    .catch((err) => console.error(err));

  return data;
};

export const HomeScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch(
      "https://voux0k38.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'launch'%5D",
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (!data.result) return <View />;
  console.log(data.result[0].launchDate);

  return (
    <MainTemplate
    // refreshing={loading}
    // onRefresh={() => {
    //   setLoading(true);
    //   refetch();
    // }}
    >
      <LaunchPreview
        item={{
          Name: data.result[0].missionName,
          Date: data.result[0].launchDate,
          Status: 'Confirmed',
          Rocket: {
            data: {
              attributes: {
                Name: data.result[0].missionName,
                MainImage: {
                  data: {
                    attributes: {
                      url: 'https://hips.hearstapps.com/hmg-prod/images/in-this-spacex-handout-image-a-falcon-9-rocket-carrying-the-news-photo-1591219555.jpg',
                    },
                  },
                },
              },
            },
          },
        }}
        buttonTitle='Kolejne starty »'
        buttonOnPress={() => navigation.navigate('LaunchQueue')}
        additionalButton
        // additionalButtonOnPress={() =>
        //   // navigation.navigate('LaunchDetails', {
        //   //   id: data?.missions.data[0]?.id,
        //   // })
        // }
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

      <SectionPreview
        introduction='BĄDŹ NA BIEŻĄCO'
        title='ARTYKUŁY'
        note='Ostatnia aktualizacja'
        description="Drugi stopień z 'udanego' startu rosyjskiej rakiety Angara wczoraj późnym wieczorem niekontrolowanie deorbitował nad Południowym Pacyfikiem."
        credits='NASA'
        buttonTitle='Przeczytaj nowości »'
        photoUrl={require('@/assets/images/homepage/articles.png')}
        onPress={() => null}
      />

      <SectionPreview
        introduction='WSZYSTKO O BRANŻY KOSMICZNEJ'
        title='BAZA WIEDZY'
        note='Jesteś ciekawy?'
        description='W naszej bazie wiedzy udostepniamy zebrane przez nas informacje o wszystkich popularnych rakietach, agencjach kosmicznych i trwających misjach.'
        credits='SpaceX'
        buttonTitle='Sprawdź informacje »'
        photoUrl={require('@/assets/images/homepage/knowladgebase.png')}
        onPress={() => null}
      />
    </MainTemplate>
  );
};
