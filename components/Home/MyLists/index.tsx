import * as React from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";

import { Link } from "expo-router";

import { useGiftLists } from "@/hooks/useGiftLists";

const MyListPage = () => {
  const [title, setTitle] = React.useState("");
  const { giftLists, addGiftList, deleteGiftList } = useGiftLists();

  console.log("LISTS", giftLists);

  const handleAdd = () => {
    if (title.trim()) {
      addGiftList(title.trim());
      setTitle("");
    }
  };

  if (!giftLists.length) {
    console.log("I GET HIT??");
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>It's your first time!</Text>
        <Text>Let's start creating your first list</Text>
        <TextInput
          placeholder="New Gift List Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <Pressable
          onPress={handleAdd}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#f8d49d" : "#ffbd59",
            },
            styles.createListBtn,
          ]}
          accessibilityLabel="Create a list"
        >
          <Text>Create a list</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={giftLists}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Link
              href={{ pathname: "/gift-lists/[id]", params: { id: item.id } }}
            >
              <Text style={styles.title}>{item.title}</Text>
            </Link>
            <Button title="Delete" onPress={() => deleteGiftList(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 30,
    maxHeight: 220,
  },
  headerText: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  createListBtn: {
    display: "flex",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  link: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

export default MyListPage;
