import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconLock, IconSearch } from "tabler-icons-react-native";
import AccountCard from "../components/AccountCard";
import ButtonWithRoute from "../components/ButtonWithRoute";
import Input from "../components/Input";
import useStorage from "../hooks/useStorage";

export default function Homepage({ navigation }) {
  const { getAllKeys, multiGet } = useStorage();
  const [passwords, setPasswords] = useState([]);
  const [search, setSearch] = useState("");

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
        <View style={styles.top}>
          <Input
            Icon={IconSearch}
            placeholder="Pesquisar Conta"
            value={search}
            setText={setSearch}
            callback={(text) => {
              if (!text || text === "") {
                loadAllKeys();
                return;
              }
              const matches = Object.keys(passwords).filter((key) => {
                return key.includes(search);
              });
              let passwordsDict = {};
              for (var entry of matches) {
                passwordsDict[entry] = passwords[entry];
              }
              console.log(passwordsDict);
              setPasswords(passwordsDict);
            }}
          ></Input>

          <ButtonWithRoute
            title="Criar Senha"
            type="secondary"
            route="CreateNewPassword"
            navigation={navigation}
          />
        </View>
        <View>
          <Text style={styles.text}>Suas atividades recentes</Text>
        </View>
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
}

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
    marginTop: 20,
  },
  top: {
    flex: 0,
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 15,
    color: "#858585",
    marginTop: 20,
  },
  accountCards: {
    marginTop: 20,
  },
});
