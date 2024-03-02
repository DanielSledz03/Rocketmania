import { RobotoBold, RobotoMedium } from "@components/texts";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { AnimatedView, CountdownWithStatus, Placeholder } from "@/components";
import { RootState } from "@/store";
import { SCREEN_HEIGHT } from "@/utils";
import SkeletonPlaceholder from "@/components/SkeletonPlaceholder/SkeletonPlaceholder";

export const HeaderOfSection = () => {
  const missionDetails = useSelector(
    (state: RootState) => state.missionDetails.missionDetails
  );
  if (!missionDetails) {
    return (
      <Placeholder>
        <SkeletonPlaceholder.Item
          borderRadius={5}
          height={20}
          width={"80%"}
          marginBottom={10}
        ></SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          borderRadius={5}
          height={30}
          width={"70%"}
          marginBottom={30}
        ></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          borderRadius={5}
          height={30}
          width={"70%"}
          marginBottom={40}
        ></SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          borderRadius={5}
          height={30}
          width={"45%"}
          marginBottom={30}
        ></SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          borderRadius={5}
          height={20}
          width={"55%"}
        ></SkeletonPlaceholder.Item>
      </Placeholder>
    );
  }

  return (
    <AnimatedView style={styles.container}>
      <RobotoMedium style={styles.text}>
        MISJA:{" "}
        <RobotoMedium style={styles.missionName}>
          {missionDetails.name}
        </RobotoMedium>
      </RobotoMedium>
      <RobotoBold style={styles.rocketName}>
        {missionDetails.rocket.name}
      </RobotoBold>
      <CountdownWithStatus
        targetDate={missionDetails.date}
        missionStatus={missionDetails.status}
        style={styles.countdown}
        countdownStyles={styles.countdownStyles}
        changeLogs={missionDetails.changeLogs}
      />
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: { opacity: 1 },

  rocketName: { width: "85%", textTransform: "uppercase" },

  text: {
    color: "#6D6D6D",
    fontSize: 16,
  },

  missionName: {
    textTransform: "uppercase",
  },

  countdown: { height: SCREEN_HEIGHT * 0.25, width: "100%" },

  countdownStyles: {
    marginTop: 10,
    marginLeft: -15,
  },

  placeholderOfSection: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
});
