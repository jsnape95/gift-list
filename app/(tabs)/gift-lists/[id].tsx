import { useLocalSearchParams } from "expo-router";
import { useGifts } from "@/hooks/useGifts";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function GiftListDetailScreen() {
  const { id: listId } = useLocalSearchParams<{ id: string }>();
  console.log("🧭 Opened gift list:", listId);
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

  console.log("GIFTS IN LIST", gifts);

  return (
    <ProtectedRoute>
      <View style={styles.container}>
        <Text style={styles.heading}>Add Gift</Text>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <TextInput
          placeholder="URL"
          value={url}
          onChangeText={setUrl}
          style={styles.input}
        />
        <Button title="Add Gift" onPress={handleAddGift} />

        <FlatList
          data={gifts}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <View style={styles.giftItem}>
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                {item.description ? <Text>{item.description}</Text> : null}
                {item.url ? (
                  <Text style={{ color: "#1E90FF" }}>{item.url}</Text>
                ) : null}
              </View>
              <Button title="Delete" onPress={() => deleteGift(item.id)} />
            </View>
          )}
        />
      </View>
    </ProtectedRoute>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  heading: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  giftItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: "bold" },
});
