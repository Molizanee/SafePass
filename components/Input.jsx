import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

const Input = ({
  Icon,
  placeholder,
  password = false,
  value,
  setText,
  callback = () => {},
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.input}>
      <Pressable onPress={togglePasswordVisibility}>
        <Icon color="#0075FF" size={35} stroke={1.5} />
      </Pressable>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#858585"
        color="#858585"
        cursorColor="#0075FF"
        secureTextEntry={!isPasswordVisible && password} // Toggle secureTextEntry based on state
        value={value}
        onChangeText={(text) => {
          setText(text);
          callback(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
    padding: 20,
    gap: 10,
    backgroundColor: "#2B2B2B",
    borderRadius: 25,
  },
  textInput: {
    fontSize: 18,
    color: "#858585",
  },
});

export default Input;
