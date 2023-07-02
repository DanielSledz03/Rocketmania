import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useEffect } from 'react';
import { Platform, UIManager } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Provider } from 'react-redux';
import { TabNavigation } from '@/navigation/TabNavigation/TabNavigation';
import store from '@/store/store';

const client = new ApolloClient({
  uri: 'https://voux0k38.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache(),
});

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

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
