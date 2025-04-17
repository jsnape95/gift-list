import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import { signOut } from "firebase/auth";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { auth } from "@/lib/firebase";

const Account = () => {
  const { user } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <ProtectedRoute>
      <View style={{ padding: 20 }}>
        <Text>Welcome, {user?.email}</Text>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </ProtectedRoute>
  );
};

export default Account;
