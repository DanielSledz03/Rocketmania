import { AnimatedImage } from "../AnimatedImage/AnimatedImage";
import { AnimatedView } from "../AnimatedView/AnimatedView";
import { ButtonPrimary } from "../Buttons/PrimaryButton";
import { CountdownWithStatus } from "../CountdownWithStatus/CountdownWithStatus";
import { LaunchPreviewPlaceholder } from "../LaunchPreviewPlaceholder/LaunchPreviewPlaceholder";
import { RobotoBold, RobotoRegular } from "@components/texts";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";
import { moderateScale } from "react-native-size-matters";
import { Mission } from "@/types/mission";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  countdownStyle?: StyleProp<ViewStyle>;
  buttonTitle: string;
  buttonOnPress: () => void;
  mission: Mission;
  buttonStyle?: StyleProp<ViewStyle>;
  additionalButton?: boolean;
  additionalButtonOnPress?: () => void;
}

export const LaunchPreview: React.FC<Props> = ({
  containerStyle,
  countdownStyle,
  buttonTitle,
  buttonOnPress,
  mission,
  buttonStyle,
  additionalButton,
  additionalButtonOnPress,
}) => {
  if (!mission) {
    return <LaunchPreviewPlaceholder />;
  }

  return (
    <AnimatedView style={[styles.container, containerStyle]}>
      <AnimatedImage
        style={styles.image}
        source={{
          uri: mission.rocket.image.asset.url,
        }}
      />

      <FastImage
        style={styles.gradient}
        source={require("@/assets/images/Gradient.png")}
      />

      <View style={styles.innerContainer}>
        <View>
          <RobotoRegular style={styles.upcomingMissionText}>
            {!additionalButton ? "MISJA:" : "NAJBLIŻSZA MISJA:"}{" "}
            <RobotoRegular style={styles.missionName}>
              {mission.name}
            </RobotoRegular>
          </RobotoRegular>

          <RobotoBold style={styles.rocketName}>
            {mission.rocket.name}
          </RobotoBold>
        </View>

        <View style={styles.countdownStyle}>
          <CountdownWithStatus
            targetDate={mission.date}
            style={countdownStyle}
            missionStatus={mission.status}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonPrimary
            title={buttonTitle}
            onPress={buttonOnPress}
            containerStyle={[styles.button, buttonStyle]}
            titleStyle={styles.buttonText}
          />
          {additionalButton ? (
            <ButtonPrimary
              title={"Szczegóły misji »"}
              onPress={additionalButtonOnPress}
              containerStyle={styles.additionalButton}
              titleStyle={styles.additionalButtonText}
            />
          ) : null}
        </View>
      </View>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: moderateScale(423),
    backgroundColor: "rgba(26, 26, 27, 1)",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 30,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 10,
    top: 0,
    left: 0,
    overflow: "hidden",
  },

  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
  },

  innerContainer: {
    width: "100%",
    height: "100%",
    padding: 10,
    // paddingVertical: 25,
    justifyContent: "space-around",
    overflow: "hidden",
  },

  upcomingMissionText: {
    fontSize: moderateScale(13),
    color: "#6D6D6D",
    lineHeight: 23,
  },

  missionName: {
    textTransform: "uppercase",
  },

  rocketName: {
    width: "100%",
    lineHeight: 45,
    textTransform: "uppercase",
    fontSize: moderateScale(34),
    marginVertical: 5,
  },

  countdownStyle: {
    width: "100%",
    height: "50%",
    justifyContent: "space-around",
    marginTop: 10,
    alignContent: "flex-start",
    marginLeft: -10,
  },

  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  additionalButton: {
    width: "48%",
    backgroundColor: "background: rgba(0, 0, 0, 0.7)",
    borderColor: "white",
    borderWidth: 1,
  },

  button: { width: "48%" },

  additionalButtonText: {
    color: "white",
    fontSize: 14,
  },

  buttonText: { fontSize: 14 },
});
