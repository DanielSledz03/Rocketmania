import { store } from '@/store/store';
import { TabNavigation } from '@/navigation/TabNavigation/TabNavigation';
import { Provider } from 'react-redux';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { useEffect } from 'react';
import { Platform, UIManager } from 'react-native';

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
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}

export default App;
