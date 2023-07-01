import { store } from '@/Store/store';
import { TabNavigation } from '@/navigation/TabNavigation/TabNavigation';
import { Provider } from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}

export default App;
