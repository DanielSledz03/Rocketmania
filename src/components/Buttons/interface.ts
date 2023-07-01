import { TextStyle, ViewStyle, StyleProp } from 'react-native';

/**
 * text: text displayed by button
 * disabled: is enabled : DEFAULT false
 * onClick: on click function callback
 * sytlesContainer : additional styles for container
 */
export interface InterfaceButton {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle> | {};
}
