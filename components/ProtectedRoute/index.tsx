import * as React from "react";
import { Redirect, useRootNavigationState, useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { ActivityIndicator, View } from "react-native";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const rootNavigationState = useRootNavigationState();

  const isLayoutReady = !!rootNavigationState?.key;

  if (loading || !isLayoutReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/auth/sign-in" />;
  }

  return <>{children}</>;
}
