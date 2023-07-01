import { LogBox } from 'react-native';

if (__DEV__) {
  const ignoreWarns = [
    'EventEmitter.removeListener',
    '[fuego-swr-keys-from-collection-path]',
    'Setting a timer for a long period of time',
    'ViewPropTypes will be removed from React Native',
    'AsyncStorage has been extracted from react-native',
    "exported from 'deprecated-react-native-prop-types'.",
    'Non-serializable values were found in the navigation state.',
    'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.',
    'VirtualizedLists should never be nested inside plain ScrollViews',
    '[Unhandled promise rejection: Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:]',
  ];

  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };

  LogBox.ignoreLogs(ignoreWarns);
}
