import { RobotoBold } from "../texts";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SCREEN_HEIGHT } from "@/utils";
import { useNavigation } from "@react-navigation/native";

const BackButtonAndHeading = ({ heading }: { heading: string }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Image
          source={require("../../assets/images/back.png")}
          resizeMode="contain"
          style={styles.backButtonIcon}
        />
      </TouchableOpacity>

      <View style={styles.headingContainer}>
        <RobotoBold style={styles.heading}>{heading}</RobotoBold>
      </View>
    </View>
  );
};

export { BackButtonAndHeading };

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  backButton: {
    height: "70%",
    width: "10%",
  },

  backButtonIcon: {
    height: "100%",
    width: "100%",
  },

  headingContainer: {
    width: "85%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
  },

  heading: {
    lineHeight: 60,
  },

  skeletonContent: {
    width: "100%",
    height: "100%",
  },
});
