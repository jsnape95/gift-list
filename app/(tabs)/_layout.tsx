import HomeHeader from "@/components/Home/Header";
import ProtectedRoute from "@/components/ProtectedRoute";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { theme } from "@/theme";

const TabLayout = () => {
  return (
    <ProtectedRoute>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.text,
          tabBarInactiveTintColor: theme.colors.muted,
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.border,
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
          sceneStyle: { backgroundColor: theme.colors.background },
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
        <Tabs.Screen
          name="gift-lists/[id]"
          options={{
            href: null, // 🚫 this hides it from the tab bar entirely
          }}
        />
      </Tabs>
    </ProtectedRoute>
  );
};

export default TabLayout;
