import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface PlaceholderProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export const Placeholder = ({ style, children }: PlaceholderProps) => {
  return (
    <View style={[styles.container, style]}>
      <SkeletonPlaceholder
        highlightColor='#333333'
        backgroundColor='rgba(39, 39, 40, 1)'
        speed={1600}
        shimmerWidth={400}
        enabled
      >
        <View style={styles.skeletonContainer}>{children}</View>
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  skeletonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
