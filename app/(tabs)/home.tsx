import * as React from "react";

import { View, StyleSheet } from "react-native";

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
