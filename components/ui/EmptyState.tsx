import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";

type Props = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

const EmptyState = ({ title, subtitle, action }: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    {action ? <View style={{ marginTop: theme.spacing.md }}>{action}</View> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  title: {
    fontSize: theme.typography.headings.h3,
    fontWeight: "600",
    color: theme.colors.text,
    textAlign: "center",
  },
  subtitle: {
    fontSize: theme.typography.caption,
    color: theme.colors.muted,
    textAlign: "center",
  },
});

export default EmptyState;

