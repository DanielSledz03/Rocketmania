import { Unit } from "./Unit";
import { useEffect } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { RobotoBold } from "@/components/texts";
import useCountdown from "@/hooks/useCountdown";

interface CountdownProps {
  style: StyleProp<ViewStyle>;
  targetDate: Date;
  status: string;
}

export const Countdown = ({ style, targetDate, status }: CountdownProps) => {
  const { timeLeft, isPaused, togglePause } = useCountdown(targetDate);

  useEffect(() => {
    if ((status === "Hold" && !isPaused) || (status !== "Hold" && isPaused)) {
      togglePause();
    }
  }, [status, isPaused, togglePause]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.tContainer}>
        <RobotoBold style={styles.text}>T{timeLeft.direction}</RobotoBold>
      </View>

      <Unit value={timeLeft.days} unit="dni" />
      <Unit value={timeLeft.hours} unit="godz." />
      <Unit value={timeLeft.minutes} unit="min." />
      <Unit value={timeLeft.seconds} unit="sek." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 45,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  tContainer: {
    height: "100%",
    width: 30,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 10,
  },
  text: {
    fontSize: moderateScale(22),
  },
});
