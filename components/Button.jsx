import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({ title, type, route, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(route)}
      style={[
        styles.button,
        type === "secondary" ? styles.buttonSecondary : "",
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          type === "secondary" ? styles.buttonTextSecondary : "",
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 70,
    width: 300,
    backgroundColor: "#0075FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonText: {
    color: "white",
  },
  buttonSecondary: {
    backgroundColor: "#2B2B2B",
    borderWidth: 2,
    borderColor: "#0075FF",
  },
  buttonTextSecondary: {
    color: "#0075FF",
  },
});

export default Button;
