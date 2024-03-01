import { MainTemplateProps } from './MainTemplate.Interface';
import { AnimatedView } from '../AnimatedView/AnimatedView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useRef, useState, useEffect } from 'react';
import {
  Animated,
  Easing,
  Image,
  NativeScrollEvent,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { RocketLaunchesStackParamList } from '@/navigation/Stacks/Launches';
import { isCloseToBottom, SCREEN_HEIGHT } from '@/utils';
import { useDebouncedCallback } from '@/utils/useDebouncedCallback';

type MainTemplateNav = NativeStackNavigationProp<RocketLaunchesStackParamList>;

export const MainTemplate = (props: MainTemplateProps) => {
  const { refreshing = false } = props;
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<MainTemplateNav>();
  const animationHeight = useRef(new Animated.Value(0)).current;

  const increaseHeight = useCallback(
    () =>
      Animated.timing(animationHeight, {
        duration: 500,
        toValue: 200,
        easing: Easing.quad,
        useNativeDriver: false,
      }).start(),
    [animationHeight],
  );

  const decreaseHeight = useCallback(
    () =>
      Animated.timing(animationHeight, {
        duration: 300,
        toValue: 0,
        easing: Easing.sin,
        useNativeDriver: false,
      }).start(),
    [animationHeight],
  );

  const handleScroll = useDebouncedCallback((nativeEvent: NativeScrollEvent) => {
    if (!isLoading && props.onBottom && isCloseToBottom(nativeEvent)) {
      setIsLoading(true);
      props.onBottom();
    }
  }, 200);

  const debouncedScroll = useDebouncedCallback(handleScroll, 0);

  useEffect(() => {
    if (props.refreshing) {
      increaseHeight();
    } else {
      decreaseHeight();
      setIsLoading(false);
    }
  }, [props.refreshing]);

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.logoContainer}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Image
            source={require('@/assets/images/logo2.png')}
            style={styles.logo}
            resizeMode='contain'
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.settings}>
          <FastImage
            style={styles.settingsIcon}
            source={require('@/assets/images/settings.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ ...styles.containerStyle, ...props.containerStyle }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              props.onRefresh && props.onRefresh();
            }}
          />
        }
        contentContainerStyle={{
          ...styles.containerContentStyles,
          ...props.containerContentStyles,
        }}
        overScrollMode='never'
        onScroll={({ nativeEvent }) => debouncedScroll(nativeEvent)}
        scrollEventThrottle={16}
      >
        <AnimatedView style={styles.containerAnimatedView}>
          {props.refreshing && (
            <Animated.View
              style={[styles.innerContainerAnimatedView, { height: animationHeight }]}
            ></Animated.View>
          )}

          {props.children}
        </AnimatedView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerBar: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: { width: '60%', height: '100%', marginLeft: '5%' },
  logo: {
    width: '100%',
    height: '100%',
  },
  settings: {
    width: '6%',
    height: '100%',
    marginRight: '5%',
  },
  settingsIcon: {
    width: '100%',
    height: '100%',
  },
  containerStyle: {
    width: '100%',
    marginBottom: 90,
    paddingBottom: 30,
  },
  containerContentStyles: {
    paddingHorizontal: '5%',
    paddingBottom: SCREEN_HEIGHT * 0.05,
  },
  containerAnimatedView: {
    width: '100%',
  },
  innerContainerAnimatedView: {
    width: '100%',
    alignItems: 'center',
  },
});
