import { Livestream, NoLiveBroadcast, RecordOfTheBroadcast, UpcomingBroadcast } from './Broadcasts';
import { memo, useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useDispatch, useSelector } from 'react-redux';
import { Placeholder } from '@/components';
import { missionsDetailsSliceActions, RootState } from '@/store';
import { SCREEN_HEIGHT } from '@/utils';

interface BackButtonAndBroadcastProps {
  navigateBack: () => void;
  handleLivestreamClick: () => void;
}

export const BackButtonAndBroadcast = memo(function BackButtonAndBroadcast({
  navigateBack,
  handleLivestreamClick,
}: BackButtonAndBroadcastProps) {
  const [broadcastElement, setBroadcastElement] = useState<JSX.Element>();
  const livestreamUrl = useSelector(
    (state: RootState) => state.missionDetails.missionDetails?.livestream,
  );
  const livestreamStatus = useSelector((state: RootState) => state.missionDetails.livestreamStatus);
  const livestreamScheduledDate = useSelector(
    (state: RootState) => state.missionDetails.livestreamDate,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchLivestreamData(livestreamUrl, dispatch);
  }, [livestreamUrl, dispatch]);

  useEffect(() => {
    setBroadcastElementBasedOnStatus(
      livestreamStatus,
      setBroadcastElement,
      livestreamUrl,
      livestreamScheduledDate,
      handleLivestreamClick,
    );
  }, [livestreamStatus, livestreamUrl, livestreamScheduledDate, handleLivestreamClick]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateBack} style={styles.goBackContainer}>
        <Image
          source={require('@/assets/images/back.png')}
          resizeMode='contain'
          style={styles.goBackIcon}
        />
      </TouchableOpacity>

      {broadcastElement}
    </View>
  );
});

async function fetchLivestreamData(livestreamUrl: string | undefined, dispatch: any) {
  if (livestreamUrl) {
    dispatch(missionsDetailsSliceActions.setLivestreamStatus('loading'));

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${livestreamUrl.slice(
          32,
        )}&key=AIzaSyBgfoTlMxtExkw5Hvlxq_e413EvV-sg9n8`,
      );
      const data = await response.json();

      if (data.items[0].liveStreamingDetails?.scheduledStartTime !== undefined) {
        dispatch(
          missionsDetailsSliceActions.setLivestreamDate(
            data.items[0].liveStreamingDetails.scheduledStartTime,
          ),
        );
      }
      dispatch(
        missionsDetailsSliceActions.setLivestreamStatus(data.items[0].snippet.liveBroadcastContent),
      );
    } catch (error) {
      console.error(error);
      dispatch(missionsDetailsSliceActions.setLivestreamStatus('NoLiveBroadcast'));
    }
  } else {
    dispatch(missionsDetailsSliceActions.setLivestreamStatus('NoLiveBroadcast'));
  }
}

function setBroadcastElementBasedOnStatus(
  livestreamStatus: string,
  setBroadcastElement: any,
  livestreamUrl: string | undefined,
  livestreamScheduledDate: string | undefined,
  handleLivestreamClick: () => void,
) {
  switch (livestreamStatus) {
    case 'loading':
      setBroadcastElement(
        <Placeholder>
          <SkeletonPlaceholder.Item
            borderRadius={5}
            height={35}
            width={200}
          ></SkeletonPlaceholder.Item>
        </Placeholder>,
      );
      break;

    case 'upcoming':
      setBroadcastElement(
        <UpcomingBroadcast streamLink={livestreamUrl} streamDate={livestreamScheduledDate} />,
      );
      break;

    case 'none':
      setBroadcastElement(<RecordOfTheBroadcast streamLink={livestreamUrl} />);
      break;

    case 'live':
      setBroadcastElement(
        <Livestream streamLink={livestreamUrl} onPress={handleLivestreamClick} />,
      );
      break;

    default:
      setBroadcastElement(<NoLiveBroadcast />);
  }
}

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
