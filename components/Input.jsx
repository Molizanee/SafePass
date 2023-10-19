import { TextInput, StyleSheet, View } from "react-native";

const Input = ({ Icon, placeholder, password = false }) => {
  return (
    <View style={styles.input}>
      <Icon color="#0075FF" size={40} stroke={1.5} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#858585"
        color="#858585"
        cursorColor="#0075FF"
        secureTextEntry={password}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    height: 70,
    padding: 20,
    gap: 10,
    backgroundColor: "#2B2B2B",
    borderRadius: 25,
  },
  textInput: {
    fontSize: 15,
    color: "#858585",
  },
});

export default Input;
