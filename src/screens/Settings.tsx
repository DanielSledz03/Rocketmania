import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { MainTemplate } from "@/components";
import { BackButtonAndHeading } from "@/components/BackButtonAndHeading/BackButtonAndHeading";
import { SpaceGroteskBold } from "@/components/texts";
import CheckboxWithLabel from "@/components/CheckboxWithLabel/CheckboxWithLabel";
import { SocialMediaBox } from "@/components/SocialMediaBox/SocialMediaBox";

export const Settings = () => {
  return (
    <MainTemplate>
      <BackButtonAndHeading heading="Ustawienia" />

      <SpaceGroteskBold>POWIADOMIENIA STARBASE</SpaceGroteskBold>

      <CheckboxWithLabel label="start" />

      <SpaceGroteskBold>OBSERWUJ NAS</SpaceGroteskBold>

      <View style={styles.socialMediaList}>
        <SocialMediaBox src={require("@/assets/icons/yt.png")} />
        <SocialMediaBox src={require("@/assets/icons/fb.png")} />
        <SocialMediaBox src={require("@/assets/icons/ig.png")} />
      </View>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  socialMediaList: {
    flexDirection: "row",
    width: "100%",
    marginTop: 15,
  },
});
