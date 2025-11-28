import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import { theme } from "@/theme";

const Card = ({ style, ...rest }: ViewProps) => {
  return <View style={[styles.card, style]} {...rest} />;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadow.card,
  },
});

export default Card;

