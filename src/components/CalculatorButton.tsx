import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export type ButtonVariant = "number" | "operator" | "special";

interface CalculatorButtonProps {
  label?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  onPress?: () => void;
}

export function CalculatorButton({
  label,
  children,
  variant = "number",
  onPress,
}: CalculatorButtonProps) {
  const buttonStyle = [
    styles.button,
    variant === "operator" && styles.operator,
    variant === "special" && styles.special,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {children ? children : <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#2C2C2E",
    alignItems: "center",
    justifyContent: "center",
  },
  operator: {
    backgroundColor: "#FF9500",
  },
  special: {
    backgroundColor: "#505050",
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "400",
  },
});

