import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { signOut } from "firebase/auth";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { auth } from "@/lib/firebase";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { theme } from "@/theme";

const Account = () => {
  const { user, profile } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <ProtectedRoute>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.heading}>Account</Text>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{profile?.name || "Not set"}</Text>

            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user?.email}</Text>

            <Button
              title="Sign out"
              variant="danger"
              onPress={handleSignOut}
              style={styles.signOut}
            />
          </Card>
        </View>
      </SafeAreaView>
    </ProtectedRoute>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  heading: {
    fontSize: theme.typography.headings.h2,
    fontWeight: "700",
    marginBottom: theme.spacing.md,
  },
  label: {
    fontSize: theme.typography.caption,
    color: theme.colors.muted,
    marginTop: theme.spacing.md,
  },
  value: {
    fontSize: theme.typography.body,
    color: theme.colors.text,
    fontWeight: "600",
  },
  signOut: {
    marginTop: theme.spacing.lg,
  },
});

export default Account;
