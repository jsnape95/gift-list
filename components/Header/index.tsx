import { FontAwesome } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const HeaderTitle = () => {
  const onPressSettings = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gift'it</Text>
      <Pressable
        style={styles.settings}
        onPress={onPressSettings}
        accessibilityLabel="Go to settings"
      >
        <FontAwesome size={28} name="cog" color={"#2e2d2d"} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    padding: 15,
    backgroundColor: "#afc1d0",
  },
  text: {
    color: "#2e2d2d",
    fontWeight: "bold",
    fontSize: 32,
    fontStyle: "italic",
  },
  settings: {},
});

export default HeaderTitle;
