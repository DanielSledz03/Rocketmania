import { BackButtonAndBroadcast } from './components/BackButtonAndBroadcast/BackButtonAndBroadcast';
import { HeaderOfSection } from './components/Header/HeaderOfSection';
import { Photos } from './components/Photos/Photos';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, youtubeModalSliceActions } from '@/store';

export const MissionMainInformation = memo(function MissionMainInformation() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const missionDetails = useSelector((state: RootState) => state.missionDetails.missionDetails);

  return (
    <View>
      <BackButtonAndBroadcast
        goBack={() => navigation.goBack()}
        handleLivestreamPress={() => {
          if (missionDetails?.livestream) {
            dispatch(youtubeModalSliceActions.toggleYoutubeModal());
            dispatch(youtubeModalSliceActions.setLivestreamLink(missionDetails?.livestream));
          }
        }}
      />
      <HeaderOfSection />
      <Photos />
    </View>
  );
});
