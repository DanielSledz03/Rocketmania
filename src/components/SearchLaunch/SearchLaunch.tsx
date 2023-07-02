import { useNavigation } from '@react-navigation/native';
import { memo, useMemo } from 'react';
import {
  Image,
  LayoutAnimation,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RobotoRegular } from '@components/texts';
import { Mission } from '@/types/mission';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RocketLaunchesStackParamList } from '@/navigation/Stacks/Launches';
import Animated from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { missionsSearchSliceActions } from '@/store/missionsSearch';
import { RootState } from '@/store/store';

export type MissionQuequeNavigationProp = NativeStackNavigationProp<
  RocketLaunchesStackParamList,
  'MissionsQueque'
>;

export const SearchLaunch = memo(function SearchLaunch() {
  const navigation = useNavigation<MissionQuequeNavigationProp>();
  const dispatch = useDispatch();
  const { inputValue, missions } = useSelector((state: RootState) => state.missionsSearch);

  const foundedValues = useMemo(
    () =>
      missions
        .filter((item: Mission) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
        .map((item: Mission) => (
          <TouchableOpacity
            activeOpacity={0.5}
            key={item._id}
            style={styles.searchItem}
            onPress={() => {
              navigation.navigate('LaunchDetails', { id: item._id });
              dispatch(missionsSearchSliceActions.setInputValue(''));
            }}
          >
            <RobotoRegular style={styles.searchItemTitle}>{item.name}</RobotoRegular>
          </TouchableOpacity>
        )),
    [missions, inputValue],
  );

  return (
    <View style={styles.container}>
      <RobotoRegular>Wyszukaj misję:</RobotoRegular>
      <Animated.View
        style={{
          ...styles.filterSelectContainer,
          height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
        }}
      >
        <TextInput
          placeholder='Czego szukasz?'
          placeholderTextColor='rgba(51, 51, 51, 1)'
          style={styles.textInput}
          onChangeText={(text) => {
            dispatch(missionsSearchSliceActions.setInputValue(text));
          }}
          value={inputValue}
        />

        <View style={styles.searchItemsList}>{inputValue.length > 2 ? foundedValues : ''}</View>

        <View style={styles.iconContainer}>
          <Image source={require('@/assets/images/search.png')} style={styles.icon} />
        </View>
      </Animated.View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: '100%',
    zIndex: 999,
    position: 'relative',
    marginBottom: 50,
  },

  filterSelectContainer: {
    backgroundColor: 'black',
    position: 'relative',
    width: '100%',
    minHeight: 45,
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 5,
  },

  textInput: {
    width: '100%',
    height: 45,
    paddingLeft: 10,
    fontSize: 12,
    color: 'white',
  },

  iconContainer: {
    position: 'absolute',
    right: 0,
    height: 45,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },

  searchItemsList: {
    position: 'relative',
  },

  searchItem: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: 'black',
  },

  searchItemTitle: {
    color: 'white',
    fontSize: 12,
  },
});
