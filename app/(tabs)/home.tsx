import * as React from "react";

import { SafeAreaView, StyleSheet } from "react-native";

import MyListPage from "@/components/Home/MyLists";
import { theme } from "@/theme";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MyListPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

export default Home;
