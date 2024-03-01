import { TextProps } from './interface';
import { useTheme } from '@react-navigation/native';
import { Text } from 'react-native';

const SpaceGroteskBold = ({ children, style }: TextProps) => {
  const { colors } = useTheme();

  return (
    <Text style={[{ fontFamily: 'SpaceGrotesk-Bold', color: colors.text, fontSize: 25 }, style]}>
      {children}
    </Text>
  );
};

export { SpaceGroteskBold };
