import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "@/components/ui/Button";
import { theme } from "@/theme";

const HomeHeader = () => {
  const onPressMyLists = () => null;
  const onPressFriendsLists = () => null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your lists</Text>
      <View style={styles.actions}>
        <Button
          title="My lists"
          variant="secondary"
          onPress={onPressMyLists}
          style={styles.button}
        />
        <Button
          title="Friends"
          variant="ghost"
          onPress={onPressFriendsLists}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.typography.headings.h2,
    fontWeight: "700",
    marginBottom: theme.spacing.sm,
    color: theme.colors.text,
  },
  actions: {
    flexDirection: "row",
    gap: theme.spacing.sm,
  },
  button: {
    flex: 1,
  },
});

export default HomeHeader;
