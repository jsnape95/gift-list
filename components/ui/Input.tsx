import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { theme } from "@/theme";

type Props = TextInputProps & {
  label?: string;
  error?: string;
};

const Input = React.forwardRef<TextInput, Props>(
  ({ label, error, style, ...rest }, ref) => {
    return (
      <View style={styles.container}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <TextInput
          ref={ref}
          placeholderTextColor={theme.colors.muted}
          style={[styles.input, !!error && styles.errorBorder, style]}
          {...rest}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    );
  }
);

Input.displayName = "Input";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: theme.spacing.md,
  },
  label: {
    fontWeight: "600",
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radii.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm + 2,
    backgroundColor: theme.colors.surface,
    fontSize: theme.typography.body,
    color: theme.colors.text,
  },
  errorBorder: {
    borderColor: theme.colors.danger,
  },
  errorText: {
    marginTop: theme.spacing.xs / 2,
    color: theme.colors.danger,
    fontSize: theme.typography.caption,
  },
});

export default Input;

