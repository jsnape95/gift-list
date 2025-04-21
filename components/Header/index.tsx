import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/Logo";

const HeaderTitle = () => {
  const onPressSettings = () => {};
  const { loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Logo />
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
