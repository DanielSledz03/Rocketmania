import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { RobotoBold } from "@/components/texts";
import useCountdown from "@/hooks/useCountdown";
import { BroadcastStyle } from "./BroadcastStyle";
import { IBroadcast } from "./interface";

export const UpcomingBroadcast = ({
  streamDate,
  streamLink = "",
}: IBroadcast) => {
  const { hours, minutes, seconds } = useCountdown(streamDate || "").timeLeft;

  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(streamLink)}
      style={[BroadcastStyle.container, styles.container]}
    >
      <View style={BroadcastStyle.centerElement}>
        <RobotoBold style={[BroadcastStyle.text, styles.text]}>
          Live zacznie się za: {hours}:{minutes}:{seconds}
        </RobotoBold>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent", // If this doesn't conflict with BroadcastStyle.container, consider merging.
    borderWidth: 1,
    borderColor: "#FF0000",
  },
  text: {
    color: "#FF0000", // Same as above for text styles.
  },
});
