import {
  ApolloClient,
  ApolloProvider,
  defaultDataIdFromObject,
  InMemoryCache,
} from "@apollo/client";
import { useEffect } from "react";
import { Platform, Text, UIManager } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { Provider } from "react-redux";
import { LogLevel, OneSignal } from "react-native-onesignal";

import { TabNavigation } from "@/navigation/TabNavigation/TabNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import SpInAppUpdates, {
  NeedsUpdateResponse,
  IAUUpdateKind,
  StartUpdateOptions,
} from "sp-react-native-in-app-updates";

import store from "@/store/store";

const client = new ApolloClient({
  uri: "https://vjzwc7w5.api.sanity.io/v2023-08-01/graphql/development/default",
  cache: new InMemoryCache({
    dataIdFromObject(responseObject) {
      switch (responseObject.__typename) {
        case "Rocket":
          return `Rocket:${responseObject._id}`;
        case "Mission":
          return `Mission:${responseObject._id}`;
        default:
          return defaultDataIdFromObject(responseObject);
      }
    },
  }),
});

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

ErrorUtils.setGlobalHandler((error, isFatal) => {
  console.error(error, isFatal);
});

// const inAppUpdates = new SpInAppUpdates(
//   true, // isDebug
// );
// inAppUpdates
//   .checkNeedsUpdate()
//   .then((result) => {
//     if (result.shouldUpdate) {
//       let updateOptions: StartUpdateOptions = {};
//       if (Platform.OS === 'android') {
//         // android only, on iOS the user will be promped to go to your app store page
//         updateOptions = {
//           updateType: IAUUpdateKind.FLEXIBLE,
//         };
//       }
//       inAppUpdates.startUpdate(updateOptions); // https://github.com/SudoPlz/sp-react-native-in-app-updates/blob/master/src/types.ts#L78
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   });

function App(): JSX.Element {
  useEffect(() => {
    changeNavigationBarColor("black");
  }, []);

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize("ec72127d-65c5-4b9a-a08d-c7e4de1ec582");

  OneSignal.User.addTag("tag", "Starship");

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener("click", (event) => {
    console.log("OneSignal: notification clicked:", event);
  });

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <TabNavigation />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
