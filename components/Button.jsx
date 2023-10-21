import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({ title, type, route, routeOptions, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(route, routeOptions)}
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
    borderRadius: 25,
    width: "100%",
    height: 70,
    backgroundColor: "#0075FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
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
