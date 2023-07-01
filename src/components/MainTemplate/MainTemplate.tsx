import { useCallback, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  Platform,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { MainTemplateProps } from './MainTemplate.Interface';
import { useNavigation } from '@react-navigation/native';
import { AnimatedView } from '../AnimatedView/AnimatedView';
import { SCREEN_HEIGHT, isCloseToBottom } from '@/utils';

export const MainTemplate = (props: MainTemplateProps) => {
  const { refreshing = false } = props;
  const navigation = useNavigation();
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

  if (props.refreshing) {
    increaseHeight();
  } else {
    decreaseHeight();
  }

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
          <Image
            style={styles.settingsIcon}
            source={require('@/assets/images/settings.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          ...styles.containerStyle,
          ...props.containerStyle,
        }}
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
        onScroll={({ nativeEvent }) => {
          if (props.onBottom && isCloseToBottom(nativeEvent)) {
            props.onBottom();
          }
        }}
      >
        <AnimatedView style={styles.containerAnimatedView}>
          {props.refreshing && (
            <Animated.View style={[styles.innerContainerAnimatedView, { height: animationHeight }]}>
              <LottieView
                source={require('@/assets/rocketAnim.json')}
                autoPlay
                loop
                style={styles.lottie}
              />
            </Animated.View>
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
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
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

  lottie: {
    width: '100%',
    height: '100%',
  },
});
