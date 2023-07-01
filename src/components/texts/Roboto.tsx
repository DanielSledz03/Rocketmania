import { useTheme } from '@react-navigation/native';
import { Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { TextProps } from './interface';

const RobotoThin = ({ children, style }: TextProps) => {
  const { colors } = useTheme();
  return <Text style={[{ fontFamily: 'Roboto-Thin', color: colors.text }, style]}>{children}</Text>;
};

const RobotoLight = ({ children, style }: TextProps) => {
  const { colors } = useTheme();

  return (
    <Text
      style={[
        {
          fontFamily: 'Roboto-Light',
          color: colors.text,
          fontSize: moderateScale(10),
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const RobotoRegular = ({ children, style }: TextProps) => {
  const { colors } = useTheme();
  return (
    <Text style={[{ fontFamily: 'Roboto-Regular', color: colors.text }, style]}>{children}</Text>
  );
};

const RobotoMedium = ({ children, style }: TextProps) => {
  const { colors } = useTheme();
  return (
    <Text style={[{ fontFamily: 'Roboto-Medium', color: colors.text }, style]}>{children}</Text>
  );
};

export const RobotoBold = ({ children, style }: TextProps) => {
  const { colors } = useTheme();
  return (
    <Text style={[{ fontFamily: 'Roboto-Bold', color: colors.text, fontSize: 50 }, style]}>
      {children}
    </Text>
  );
};

const RobotoBlack = ({ children, style }: TextProps) => {
  const { colors } = useTheme();
  return (
    <Text style={[{ fontFamily: 'Roboto-Black', color: colors.text, fontSize: 55 }, style]}>
      {children}
    </Text>
  );
};

export { RobotoLight, RobotoThin, RobotoMedium, RobotoRegular, RobotoBlack };
