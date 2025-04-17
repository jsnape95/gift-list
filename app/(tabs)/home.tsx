import { Text, View, StyleSheet } from "react-native";
import React from "react";
import MyListPage from "@/components/Home/MyLists";

const Home = () => {
  return (
    <View style={styles.container}>
      <MyListPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 30,
  },
});

export default Home;
