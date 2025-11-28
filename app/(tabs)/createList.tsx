import { SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { useGiftLists } from "@/hooks/useGiftLists";
import { router } from "expo-router";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { theme } from "@/theme";

const CreateList = () => {
  const [title, setTitle] = useState("");
  const { addGiftList } = useGiftLists();

  const handleCreate = async () => {
    if (title.trim()) {
      await addGiftList(title.trim());
      setTitle("");
      router.push("/home");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.headerText}>Create New Gift List</Text>
        <Text style={styles.subtitle}>
          Give your list a name (e.g., "Birthday 2025" or "Christmas Wishlist").
        </Text>

        <Input
          placeholder="Gift List Title"
          value={title}
          onChangeText={setTitle}
          autoFocus
        />

        <Button title="Create list" onPress={handleCreate} disabled={!title.trim()} />
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
    justifyContent: "center",
  },
  card: {
    maxWidth: 520,
    width: "100%",
    alignSelf: "center",
  },
  headerText: {
    fontSize: theme.typography.headings.h1,
    fontWeight: "700",
    marginBottom: theme.spacing.sm,
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: theme.typography.caption,
    color: theme.colors.muted,
    marginBottom: theme.spacing.md,
  },
});

export default CreateList;
