import {
  ApolloClient,
  ApolloProvider,
  defaultDataIdFromObject,
  InMemoryCache,
} from '@apollo/client';
import { useEffect } from 'react';
import { Platform, UIManager } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Provider } from 'react-redux';
import { TabNavigation } from '@/navigation/TabNavigation/TabNavigation';
import store from '@/store/store';

const client = new ApolloClient({
  uri: 'https://vjzwc7w5.api.sanity.io/v2023-08-01/graphql/development/default',
  cache: new InMemoryCache({
    dataIdFromObject(responseObject) {
      switch (responseObject.__typename) {
        case 'Rocket':
          return `Rocket:${responseObject._id}`;
        case 'Mission':
          return `Mission:${responseObject._id}`;
        default:
          return defaultDataIdFromObject(responseObject);
      }
    },
  }),
});

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

ErrorUtils.setGlobalHandler((error, isFatal) => {
  console.error(error, isFatal);
});

function App(): JSX.Element {
  useEffect(() => {
    changeNavigationBarColor('black');
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <TabNavigation />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
