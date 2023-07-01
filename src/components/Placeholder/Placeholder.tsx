// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { StyleProp, View, ViewStyle } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import SkeletonContent from 'react-native-skeleton-content-nonexpo';

interface Props {
  containerStyle: StyleProp<ViewStyle>;
  layout?: undefined;
}

const layoutDefault = [{ key: 1, width: '100%', height: '100%', opacity: 0.8 }];

export const Placeholder = (props: Props) => {
  const { containerStyle, layout = layoutDefault } = props;
  return (
    <SkeletonPlaceholder highlightColor='#FF0000' speed={1800} shimmerWidth={200}>
      <SkeletonPlaceholder.Item flexDirection='row' alignItems='center'>
        <SkeletonPlaceholder.Item width={120} height={60} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
  // return (
  //   <SkeletonContent
  //     isLoading={true}
  //     boneColor='rgba(39, 39, 40, 1)'
  //     highlightColor='#333333'
  //     duration={1700}
  //     containerStyle={containerStyle}
  //     layout={layout}
  //   />
  // );
};
