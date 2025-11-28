import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { router } from "expo-router";
import Logo from "@/components/Logo";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { theme } from "@/theme";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        name,
        dateOfBirth,
        gender,
        email,
        createdAt: new Date(),
      });

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
          <Text style={styles.title}>Create an account</Text>
          <Text style={styles.subtitle}>
            Join Gift'it and start organizing your wishlist.
          </Text>
        </View>

        <Input placeholder="Full name" value={name} onChangeText={setName} />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Gender (optional)"
          value={gender}
          onChangeText={setGender}
        />
        <Input
          placeholder="Date of birth (YYYY-MM-DD)"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Input
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title="Sign up" onPress={handleSignUp} loading={loading} />

        <TouchableOpacity onPress={() => router.push("/sign-in")}>
          <Text style={styles.link}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
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
