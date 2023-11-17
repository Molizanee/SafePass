import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconLock } from "tabler-icons-react-native";
import AccountCard from "../components/AccountCard";
import useStorage from "../hooks/useStorage";

const Accounts = ({ navigation }) => {
  const { getAllKeys, multiGet } = useStorage();
  const [passwords, setPasswords] = useState([]);

  const loadAllKeys = async () => {
    const keys = await getAllKeys();
    const passwords = await multiGet(keys);
    let passwordsDict = {};
    for (var entry of passwords) {
      passwordsDict[entry[0]] = JSON.parse(entry[1]);
    }
    setPasswords(passwordsDict);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadAllKeys();
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <ScrollView style={styles.background}>
      <View style={styles.grid}>
        <Text style={styles.text}>Suas senhas</Text>
        <View style={styles.accountCards}>
          {Object.keys(passwords).map((key) => {
            return (
              <AccountCard
                key={key}
                Product={IconLock}
                account={key}
                password={passwords[key].password}
                callback={loadAllKeys}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#121212",
  },

  grid: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontSize: 18,
    color: "#858585",
    marginTop: 20,
    marginBottom: 40,
  },
  accountCards: {
    gap: 5,
  },
});

export default Accounts;
