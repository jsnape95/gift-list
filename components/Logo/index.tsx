import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";

const Logo = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>Gift</Text>
      <Text style={[styles.text, styles.accent]}>'it</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xs,
  },
  text: {
    color: theme.colors.text,
    fontWeight: "800",
    fontSize: 32,
  },
  accent: {
    color: theme.colors.accent,
  },
});

export default Logo;
