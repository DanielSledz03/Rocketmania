import { DefaultTheme } from '@react-navigation/native';

export const ThemeDark = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    text: 'white',
    theme: 'dark',
  },
};

export const ThemeLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    text: 'black',
    theme: 'light',
  },
};
