import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Logo() {
  return (
    <View style={styles.logo}>
      <Text style={styles.brandText}>SafePass</Text>
      <Text style={styles.brandSubText}>Suas senhas e contas seguras.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
  },
  brandText: {
    fontSize: 36,
    fontWeight: "600",
    color: "#0075FF",
  },
  brandSubText: {
    fontSize: 15,
    color: "#858585",
  },
});

export default Logo;
