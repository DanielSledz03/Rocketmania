import { useTheme } from '@react-navigation/native';
export const Colors = () => {
  const { colors } = useTheme();

  return { ...colors };
};
