import * as React from "react";
import { Button, Text, View, StyleSheet, Pressable } from "react-native";

const MyListPage = () => {
  const [myLists, setMyLists] = React.useState(null);

  const onPressCreateList = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>It's your first time!</Text>
      <Text>Let's start creating your first list</Text>
      <Pressable
        onPress={onPressCreateList}
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
  createListBtn: {
    display: "flex",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default MyListPage;
