import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/Logo";
import { theme } from "@/theme";

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
        style={styles.iconButton}
        onPress={onPressSettings}
        accessibilityLabel="Go to settings"
      >
        <FontAwesome size={18} name="cog" color={theme.colors.text} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: theme.radii.md,
    backgroundColor: theme.colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});

export default HeaderTitle;
