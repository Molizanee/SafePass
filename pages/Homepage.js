import { StyleSheet, Text, View } from "react-native";
import ButtonWithRoute from "../components/ButtonWithRoute";
import Input from "../components/Input";
import AccountCard from "../components/AccountCard";
import Google from "../assets/google.svg";
import { IconSearch } from "tabler-icons-react-native";
import useStorage from "../hooks/useStorage";
import { useEffect, useState } from "react";

export default function Homepage({ navigation }) {
  const { getAllKeys, multiGet } = useStorage();
  const [passwords, setPasswords] = useState([]);
  useEffect(() => {
    const loadAllKeys = async () => {
      const keys = await getAllKeys();
      const passwords = await multiGet(keys);
      setPasswords(passwords);
    };
    loadAllKeys();
  }, []);

  return (
    <View style={styles.grid}>
      <View style={styles.top}>
        <Input Icon={IconSearch} placeholder="Pesquisar Conta"></Input>
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
        <AccountCard
          account="dmolizane@gmail.com"
          Product={Google}
          password={"asdasd"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#121212",
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
