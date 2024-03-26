import { StyleSheet, View } from "react-native";
import FastImage, { Source } from "react-native-fast-image";

interface SocialMediaBoxProps {
  src: number | Source | undefined;
}

export const SocialMediaBox = ({ src }: SocialMediaBoxProps) => {
  return (
    <View style={styles.container}>
      <FastImage resizeMode="contain" style={styles.icon} source={src} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 37,
    height: 37,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  icon: {
    width: 20,
    height: 20,
  },
});
