import * as React from "react";
import { StyleSheet, Text } from "react-native";

const Logo = () => {
  return <Text style={styles.text}>Gift'it</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#2e2d2d",
    fontWeight: "bold",
    fontSize: 32,
    fontStyle: "italic",
  },
});

export default Logo;
