import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LaunchPreview } from "@/components/LaunchPreview/LaunchPreview";
import { MainTemplate } from "@/components/MainTemplate/MainTemplate";
import { SectionPreview } from "@/components/SectionPreview/SectionPreview";
import { GET_INCOMING_LAUNCH } from "@/constants/queries/HomePage";
import { RocketLaunchesStackParamList } from "@/navigation/Stacks/Launches";
import { useFetch } from "@/utils";
// import { Button } from "react-native";
// import notifee from '@notifee/react-native';
// import { LogLevel, OneSignal } from "react-native-onesignal";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RocketLaunchesStackParamList,
  "HomeScreen"
>;

export const HomeScreen = ({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) => {
  const mission = useFetch(GET_INCOMING_LAUNCH);

  // // Remove this method to stop OneSignal Debugging
  // OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // // OneSignal Initialization
  // OneSignal.initialize("ec72127d-65c5-4b9a-a08d-c7e4de1ec582");

  // // requestPermission will show the native iOS or Android notification permission prompt.
  // // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  // OneSignal.Notifications.requestPermission(true);

  // // Method for listening for notification clicks
  // OneSignal.Notifications.addEventListener("click", (event) => {
  //   console.log("OneSignal: notification clicked:", event);
  // });

  // async function onDisplayNotification() {
  //   // Request permissions (required for iOS)
  //   await notifee.requestPermission();

  //   // Create a channel (required for Android)
  //   const channelId = await notifee.createChannel({
  //     id: "default",
  //     name: "Default Channel",
  //   });

  //   // Display a notification
  //   await notifee.displayNotification({
  //     title: "Notification Title",
  //     body: "Main body content of the notification",
  //     android: {
  //       channelId,
  //       // pressAction is needed if you want the notification to open the app when pressed
  //       pressAction: {
  //         id: "default",
  //       },
  //     },
  //   });
  // }

  return (
    <MainTemplate
      refreshing={mission.loading}
      onRefresh={() => {
        mission.setLoading(true);
        mission.refetch();
      }}
    >
      {/* <Button
        title="Display Notification"
        onPress={() => onDisplayNotification()}
      /> */}

      <LaunchPreview
        mission={mission.data?.allMission[0]}
        buttonTitle="Kolejne starty »"
        buttonOnPress={() => navigation.navigate("MissionsQueque")}
        additionalButton
        additionalButtonOnPress={() =>
          navigation.navigate("LaunchDetails", {
            id: mission.data?.allMission[0]._id,
          })
        }
      />

      <SectionPreview
        title="Starship"
        note="Rakieta przyszłości"
        introduction="Sekcja w trakcie budowy 🚀"
        description="Najpotężniejsza rakieta SpaceX zmieni loty w kosmos w rutynową czynność. Pozwoli zabrać ludzkość na Marsa, a może i jeszcze dalej?"
        photoUrl={require("@/assets/images/homepage/starship.png")}
        buttonTitle="W trakcie budowy ⚙️"
        credits="SpaceX"
        onPress={() => {
          navigation.navigate("InProgress");
        }}
      />
    </MainTemplate>
  );
};
