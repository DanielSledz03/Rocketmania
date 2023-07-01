import { useEffect, useRef } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const config = {
  toValue: 1,
  duration: 1200,
  useNativeDriver: false,
};

export const AnimatedView = ({ children, style }: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, config).start();
  }, [fadeAnim]);

  return <Animated.View style={[style, { opacity: fadeAnim }]}>{children}</Animated.View>;
};
