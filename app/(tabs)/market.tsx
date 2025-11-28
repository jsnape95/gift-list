import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import EmptyState from "@/components/ui/EmptyState";
import Card from "@/components/ui/Card";
import { theme } from "@/theme";

const Market = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <EmptyState
          title="Marketplace coming soon"
          subtitle="You'll soon be able to browse curated gift ideas here."
        />
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
});

export default Market;
