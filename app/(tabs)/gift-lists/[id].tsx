import { useLocalSearchParams } from "expo-router";
import { useGifts } from "@/hooks/useGifts";
import { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import ProtectedRoute from "@/components/ProtectedRoute";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import { theme } from "@/theme";

export default function GiftListDetailScreen() {
  const { id: listId } = useLocalSearchParams<{ id: string }>();
  const { gifts, addGift, deleteGift } = useGifts(listId!);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleAddGift = () => {
    if (!title.trim()) return;
    addGift({ title: title.trim(), description, url });
    setTitle("");
    setDescription("");
    setUrl("");
  };
  return (
    <ProtectedRoute>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.heading}>Add gift idea</Text>
            <Text style={styles.subtitle}>
              Keep details short and add a link so friends can buy it easily.
            </Text>
            <Input placeholder="Title" value={title} onChangeText={setTitle} />
            <Input
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            />
            <Input
              placeholder="URL"
              value={url}
              onChangeText={setUrl}
              autoCapitalize="none"
            />
            <Button title="Add gift" onPress={handleAddGift} disabled={!title.trim()} />
          </Card>

          <FlatList
            data={gifts}
            keyExtractor={(item) => item.id}
            style={styles.list}
            contentContainerStyle={
              gifts.length === 0 ? styles.emptyContainer : undefined
            }
            renderItem={({ item }) => (
              <Card style={styles.giftItem}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>{item.title}</Text>
                  {item.description ? (
                    <Text style={styles.description}>{item.description}</Text>
                  ) : null}
                  {item.url ? (
                    <Text style={styles.link}>{item.url}</Text>
                  ) : null}
                  <Text style={styles.meta}>
                    Added{" "}
                    {item.createdAt?.toDate
                      ? item.createdAt.toDate().toLocaleDateString()
                      : ""}
                  </Text>
                </View>
                <Button
                  title="Remove"
                  variant="ghost"
                  onPress={() => deleteGift(item.id)}
                  style={styles.deleteButton}
                />
              </Card>
            )}
            ListEmptyComponent={
              <Card>
                <EmptyState
                  title="No gifts yet"
                  subtitle="Add your first idea to start building the list."
                />
              </Card>
            }
          />
        </View>
      </SafeAreaView>
    </ProtectedRoute>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    gap: theme.spacing.lg,
  },
  heading: {
    fontSize: theme.typography.headings.h2,
    fontWeight: "700",
    color: theme.colors.text,
  },
  subtitle: {
    color: theme.colors.muted,
    marginBottom: theme.spacing.md,
  },
  list: {
    flex: 1,
  },
  giftItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  description: {
    color: theme.colors.text,
    marginTop: theme.spacing.xs,
  },
  link: {
    color: theme.colors.accentDark,
    marginTop: theme.spacing.xs,
    fontWeight: "600",
  },
  meta: {
    fontSize: theme.typography.small,
    color: theme.colors.muted,
    marginTop: theme.spacing.xs,
  },
  title: { fontSize: theme.typography.headings.h3, fontWeight: "600" },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  deleteButton: {
    paddingHorizontal: theme.spacing.sm,
  },
});
