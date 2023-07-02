import { Livestream, NoLiveBroadcast, RecordOfTheBroadcast, UpcomingBroadcast } from './Broadcasts';
import { memo, useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Placeholder } from '@/components';
import { missionsDetailsSliceActions, RootState } from '@/store';
import { SCREEN_HEIGHT } from '@/utils';

interface Props {
  goBack: () => any;
  handleLivestreamPress: () => any;
}

export const BackButtonAndBroadcast = memo(function BackButtonAndBroadcast({
  goBack,
  handleLivestreamPress,
}: Props) {
  const [broadcast, setBroadcast] = useState<JSX.Element>();
  const livestreamLink = useSelector(
    (state: RootState) => state.missionDetails.missionDetails?.livestream,
  );
  const livestreamStatus = useSelector((state: RootState) => state.missionDetails.livestreamStatus);
  const livestreamDate = useSelector((state: RootState) => state.missionDetails.livestreamDate);

  const dispatch = useDispatch();

  useEffect(() => {
    if (livestreamLink) {
      dispatch(missionsDetailsSliceActions.setLivestreamStatus('loading'));

      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${livestreamLink.slice(
          32,
        )}&key=AIzaSyBgfoTlMxtExkw5Hvlxq_e413EvV-sg9n8`,
      )
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.items[0].liveStreamingDetails?.scheduledStartTime !== undefined) {
            dispatch(
              missionsDetailsSliceActions.setLivestreamDate(
                resp.items[0].liveStreamingDetails.scheduledStartTime,
              ),
            );
          }
          dispatch(
            missionsDetailsSliceActions.setLivestreamStatus(
              resp.items[0].snippet.liveBroadcastContent,
            ),
          );
        })
        .catch((err) => {
          console.error(err);
          dispatch(missionsDetailsSliceActions.setLivestreamStatus('NoLiveBroadcast'));
        });
    } else {
      dispatch(missionsDetailsSliceActions.setLivestreamStatus('NoLiveBroadcast'));
    }
  }, [livestreamLink]);

  useEffect(() => {
    switch (livestreamStatus) {
      case 'loading':
        setBroadcast(<Placeholder containerStyle={styles.broadcastButtonPlaceholder} />);
        break;

      case 'upcoming':
        setBroadcast(<UpcomingBroadcast streamLink={livestreamLink} streamDate={livestreamDate} />);
        break;

      case 'none':
        setBroadcast(<RecordOfTheBroadcast streamLink={livestreamLink} />);
        break;

      case 'live':
        setBroadcast(<Livestream streamLink={livestreamLink} onPress={handleLivestreamPress} />);

        break;

      default:
        setBroadcast(<NoLiveBroadcast />);
    }
  }, [livestreamStatus]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.goBackContainer}>
        <Image
          source={require('@/assets/images/back.png')}
          resizeMode='contain'
          style={styles.goBackIcon}
        />
      </TouchableOpacity>

      {broadcast}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  broadcastButtonPlaceholder: {
    width: '60%',
    height: '60%',
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 0,
    backgroundColor: 'transparent',
  },

  goBackContainer: {
    height: '70%',
    width: '10%',
  },

  goBackIcon: {
    height: '100%',
    width: '100%',
  },
});
