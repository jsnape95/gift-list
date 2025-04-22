import * as React from "react";
import { Redirect, useRootNavigationState, useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { ActivityIndicator, View } from "react-native";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading, profile } = useAuth();
  const rootNavigationState = useRootNavigationState();

  const isLayoutReady = !!rootNavigationState?.key;

  if (user) {
    console.log("Profile", profile);
    console.log("User", user);
  }

  if (loading || !isLayoutReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return <>{children}</>;
}
