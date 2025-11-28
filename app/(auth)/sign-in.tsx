import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { router } from "expo-router";
import Logo from "@/components/Logo";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { theme } from "@/theme";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.logoContainer}>
          <Logo />
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Sign in to access your gift lists.</Text>
        </View>

        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoComplete="password"
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title="Sign in" onPress={handleSignIn} loading={loading} />

        <TouchableOpacity onPress={() => router.push("/sign-up")}>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
    justifyContent: "center",
  },
  card: {
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.headings.h2,
    fontWeight: "700",
    marginTop: theme.spacing.sm,
    color: theme.colors.text,
  },
  subtitle: {
    color: theme.colors.muted,
    marginTop: theme.spacing.xs,
    textAlign: "center",
  },
  error: {
    color: theme.colors.danger,
    marginBottom: theme.spacing.sm,
    textAlign: "center",
  },
  link: {
    color: theme.colors.text,
    marginTop: theme.spacing.md,
    textAlign: "center",
    fontWeight: "600",
  },
});
