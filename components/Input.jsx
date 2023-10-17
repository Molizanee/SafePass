import { TextInput, StyleSheet, View } from "react-native";

const Input = ({ Icon, placeholder }) => {
  return (
    <View style={styles.input}>
      <Icon color="#0075FF" size={50} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#858585"
        color="#858585"
        cursorColor="#0075FF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 0,
    flexDirection: "row",
    padding: 20,
    gap: 10,
    backgroundColor: "#2B2B2B",
    borderRadius: 15,
  },
  textInput: {
    color: "#858585",
  },
});

export default Input;
