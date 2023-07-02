import { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT } from '@/utils';
import { Livestream, UpcomingBroadcast, NoLiveBroadcast, RecordOfTheBroadcast } from './Broadcasts';
import { Placeholder } from '@/components';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface Props {
  goBack: () => any;
  handleLivestreamPress: () => any;
}

export const BackButtonAndBroadcast = ({ goBack, handleLivestreamPress }: Props) => {
  const [liveStreamStatus, setLiveStreamStatus] = useState('loading');
  const [streamDate, setStreamDate] = useState(new Date());
  const [streamLink, setStreamLink] = useState('');
  let broadcast;
  const livestreamLink = useSelector(
    (state: RootState) => state.missionDetails.missionDetails?.livestream,
  );

  useEffect(() => {
    if (livestreamLink) {
      setStreamLink(livestreamLink);
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${livestreamLink.slice(
          32,
        )}&key=AIzaSyBgfoTlMxtExkw5Hvlxq_e413EvV-sg9n8`,
      )
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.items[0].liveStreamingDetails?.scheduledStartTime !== undefined) {
            setStreamDate(resp.items[0].liveStreamingDetails.scheduledStartTime);
          }
          setLiveStreamStatus(resp.items[0].snippet.liveBroadcastContent);
        })
        .catch((err) => {
          console.error(err);
          setLiveStreamStatus('NoLiveBroadcast');
        });
    } else {
      setLiveStreamStatus('NoLiveBroadcast');
    }
  }, [livestreamLink]);

  switch (liveStreamStatus) {
    case 'loading':
      broadcast = <Placeholder containerStyle={styles.broadcastButtonPlaceholder} />;
      break;

    case 'upcoming':
      broadcast = <UpcomingBroadcast streamLink={streamLink} streamDate={streamDate} />;
      break;

    case 'none':
      broadcast = <RecordOfTheBroadcast streamLink={streamLink} />;
      break;

    case 'live':
      broadcast = <Livestream streamLink={streamLink} onPress={handleLivestreamPress} />;

      break;

    default:
      broadcast = <NoLiveBroadcast />;
  }

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
};

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
