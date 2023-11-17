import * as Clipboard from "expo-clipboard";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { IconCopy, IconTrash } from "tabler-icons-react-native";
import useStorage from "../hooks/useStorage";

const AccountCard = ({ Product, account, password, callback }) => {
  const { removeItem } = useStorage();

  const handleDelete = async (key) => {
    await removeItem(key);
    callback();
  };

  const [isPasswordVisible, setPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <Pressable>
        <View style={styles.container}>
          <Pressable onPress={togglePasswordVisibility}>
            <View>
              <Product width={80} height={80} color="#0075FF" stroke={1} />
            </View>
          </Pressable>
          <View style={styles.data}>
            <Text style={styles.text}>{account}</Text>
            <TextInput style={styles.text} secureTextEntry={isPasswordVisible}>
              {password}
            </TextInput>
          </View>
          <Pressable
            onPress={async () => {
              await Clipboard.setStringAsync(password);
            }}
          >
            <IconCopy color="#0075FF" size={35} stroke={1.5} />
          </Pressable>
          <Pressable onPress={() => handleDelete(account)}>
            <IconTrash color="#0075FF" size={35} stroke={1.5} />
          </Pressable>
        </View>

        <View style={styles.bar} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 20,
    height: 130,
    backgroundColor: "#2B2B2B",
    borderRadius: 25,
  },
  text: {
    fontSize: 15,
    color: "#858585",
  },
  bar: {
    marginTop: 10,
    marginBottom: 10,
    height: 3,
    width: 200,
    borderRadius: 20,
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#858585",
  },
  data: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
});

export default AccountCard;
