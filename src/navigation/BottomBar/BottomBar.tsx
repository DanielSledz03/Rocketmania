import { TabBarIcon } from '../TabBarIcon/TabBarIcon';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, View } from 'react-native';

const BottomBar = ({ navigation }: BottomTabBarProps) => {
  const focusedScreen = navigation.getState().routeNames[navigation.getState().index];

  return (
    <View style={styles.bottombar}>
      <TabBarIcon
        focused={focusedScreen === 'RocketLaunchesStack'}
        icon={require('@/assets/images/navigation/rocket_white.png')}
        iconFocused={require('@/assets/images/navigation/rocket_gray.png')}
        title='Starty rakiet'
        stackName='HomeScreen'
      />

      <TabBarIcon
        focused={focusedScreen === 'StarshipStack'}
        icon={require('@/assets/images/navigation/starship_white.png')}
        iconFocused={require('@/assets/images/navigation/starship_gray.png')}
        title='Starship'
        stackName='StarshipStack'
      />

      {/* <TabBarIcon
          focused={focusedScreen === 'ArticlesStack'}
          icon={require('@/assets/images/navigation/news_white.png')}
          iconFocused={require('@/assets/images/navigation/news_gray.png')}
          title="Artykuły"
          stackName="ArticlesStack"
        /> */}
      {/* 
      <TabBarIcon
        focused={focusedScreen === 'KnowladgebaseStack'}
        icon={require('@/assets/images/navigation/knowladgebase_white.png')}
        iconFocused={require('@/assets/images/navigation/knowladgebase_gray.png')}
        title='Baza wiedzy'
        stackName='KnowladgebaseStack'
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bottombar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: Platform.OS === 'ios' ? 100 : 90,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    paddingBottom: Platform.OS === 'ios' ? 40 : 0,
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default BottomBar;
