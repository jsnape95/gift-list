import HomeHeader from "@/components/Home/Header";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

const TabLayout = () => {
  const onPressMyLists = () => null;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2e2d2d",
        tabBarInactiveTintColor: "#2e2d2d",
        tabBarInactiveBackgroundColor: "#afc1d0",
        tabBarActiveBackgroundColor: "#afc1d0",
        sceneStyle: { backgroundColor: "#f3f6fa" },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true,
          header: () => <HomeHeader />,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="createList"
        options={{
          title: "Create List",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="plus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: "Market",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="shopping-bag" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
