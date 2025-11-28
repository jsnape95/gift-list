import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";
import { useGiftLists } from "@/hooks/useGiftLists";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import { theme } from "@/theme";

const MyListPage = () => {
  const [title, setTitle] = React.useState("");
  const { giftLists, addGiftList, deleteGiftList } = useGiftLists();

  const handleAdd = () => {
    if (title.trim()) {
      addGiftList(title.trim());
      setTitle("");
    }
  };

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <Card style={styles.listCard}>
      <View style={styles.listItemHeader}>
        <Link
          href={{ pathname: "/gift-lists/[id]", params: { id: item.id } }}
          style={styles.link}
        >
          <Text style={styles.title}>{item.title}</Text>
        </Link>
        <Button
          title="Delete"
          variant="ghost"
          onPress={() => deleteGiftList(item.id)}
          style={styles.listDeleteButton}
        />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.sectionTitle}>Create a new list</Text>
        <Text style={styles.sectionSubtitle}>
          Organize ideas for birthdays, holidays, or special moments.
        </Text>
        <Input
          placeholder="e.g. Emily's Birthday"
          value={title}
          onChangeText={setTitle}
          autoCapitalize="words"
        />
        <Button
          title="Save List"
          onPress={handleAdd}
          disabled={!title.trim()}
          accessibilityLabel="Create a new gift list"
        />
      </Card>

      <FlatList
        data={giftLists}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={
          giftLists.length === 0 ? styles.emptyListContainer : undefined
        }
        renderItem={renderItem}
        ListEmptyComponent={
          <Card>
            <EmptyState
              title="No lists yet"
              subtitle="Create your first list to share with friends."
            />
          </Card>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: theme.spacing.lg,
    gap: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.headings.h2,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  sectionSubtitle: {
    color: theme.colors.muted,
    marginBottom: theme.spacing.md,
    fontSize: theme.typography.caption,
  },
  list: {
    flex: 1,
  },
  emptyListContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  listCard: {
    marginBottom: theme.spacing.md,
  },
  listItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.headings.h3,
    fontWeight: "600",
    color: theme.colors.text,
  },
  listDeleteButton: {
    paddingHorizontal: theme.spacing.md,
  },
});

export default MyListPage;
