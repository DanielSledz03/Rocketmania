import { LegendItem } from './components/LegendItem';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import { TimeLineItem } from '@/components';
import { RobotoBold, RobotoRegular } from '@/components/texts';
import { GET_ROCKET_LAST_LAUNCHES } from '@/constants/Queries/RocketDetails';
import { RootState } from '@/store';
import { Mission } from '@/types';
import { translateDate, useFetch } from '@/utils';

interface Statistic {
  SuccessfulLaunches: number;
  FailedLaunches: number;
  PartialSuccessfulLaunches: number;
  PartialFailedLaunches: number;
}

const colors = [
  { color: '#00FF0A', text: 'Success' },
  { color: '#F5B308', text: 'PartialSuccess' },
  { color: '#FF0000', text: 'Failed' },
  { color: '#8A1010', text: 'PartialFailed' },
];

const sliceColor = ['#00FF0A', '#F5B308', '#FF0000', '#8A1010'];

export const CompletedMissions = () => {
  const rocket = useSelector((state: RootState) => state.rocketDetails.rocketDetails);
  const [statistic, setStatistic] = useState<Statistic | null>(null);

  const { data } = useFetch(GET_ROCKET_LAST_LAUNCHES, {
    variables: { rocketId: rocket?._id },
  });

  useEffect(() => {
    if (rocket) {
      setStatistic({
        SuccessfulLaunches: parseInt(rocket.successfull_launches) || 0,
        FailedLaunches: parseInt(rocket.failed_launches) || 0,
        PartialSuccessfulLaunches: parseInt(rocket.partial_successfull_launches) || 0,
        PartialFailedLaunches: parseInt(rocket.partial_failed_launches) || 0,
      });
    }
  }, [rocket]);

  if (!rocket || !statistic) return null;

  const statisticWithoutZeroValues = new Map<keyof Statistic, number>();
  for (const key in statistic) {
    if (statistic[key as keyof Statistic] !== 0) {
      statisticWithoutZeroValues.set(key as keyof Statistic, statistic[key as keyof Statistic]);
    }
  }

  if (statisticWithoutZeroValues.size === 0) {
    return <View />;
  }

  return (
    <>
      <RobotoBold style={styles.title}>WYKONANE MISJE</RobotoBold>
      <View style={styles.chartContainer}>
        <PieChart
          widthAndHeight={250}
          series={[
            statistic.SuccessfulLaunches,
            statistic.PartialSuccessfulLaunches,
            statistic.FailedLaunches,
            statistic.PartialFailedLaunches,
          ]}
          sliceColor={sliceColor}
        />
        <View style={styles.alignCenter}>
          <RobotoBold>
            {(
              (statistic?.SuccessfulLaunches * 100) /
              (statistic.SuccessfulLaunches +
                statistic.FailedLaunches +
                statistic.PartialFailedLaunches)
            ).toFixed(1)}
            %
          </RobotoBold>
          <RobotoRegular>sukcesu</RobotoRegular>
        </View>
      </View>
      <View style={styles.legendItemsContainer}>
        <LegendItem color='#00FF0A' text='Sukces' value={statistic.SuccessfulLaunches} />
        <LegendItem
          color='#F5B308'
          text='Częściowy sukces'
          value={statistic.PartialSuccessfulLaunches}
        />
        <LegendItem color='#FF0000' text='Niepowodzenie' value={statistic.FailedLaunches} />
        <LegendItem
          color='#8A1010'
          text='Częściowe niepowodzenie'
          value={statistic.PartialFailedLaunches}
        />
      </View>

      <View style={styles.latestLaunchesContainer}>
        {data?.allMission &&
          data.allMission?.map((mission: Mission, index: number) => {
            return (
              <TimeLineItem
                key={mission._id}
                dotColor={colors.find((item) => item.text === mission.status)?.color || '#00FF0A'}
                date={translateDate(mission.date).full}
                text={mission.name}
                isLast={index === data.allMission.length - 1}
              />
            );
          })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: { marginTop: 30, marginBottom: moderateScale(30) },

  chartContainer: { marginTop: 20, alignItems: 'center' },

  alignCenter: { alignItems: 'center', marginTop: 10 },

  legendItemsContainer: { marginTop: 50, justifyContent: 'flex-start' },

  latestLaunchesContainer: { marginTop: 30, marginBottom: 10 },
});
