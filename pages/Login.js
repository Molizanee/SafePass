import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { IconLock, IconMail } from "tabler-icons-react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.login}>
      <View style={styles.logo}>
        <Text style={styles.brandText}>SafePass</Text>
        <Text style={styles.brandSubText}>Suas senhas e contas seguras.</Text>
      </View>
      <View style={styles.inputs}>
        <Input Icon={IconMail} placeholder="Seu E-mail" />
        <Input Icon={IconLock} placeholder="Senha de Acesso" />
      </View>
      <View style={styles.buttons}>
        <Button title="Login" route="Homepage" navigation={navigation} />
        <Button title="Criar Conta" type="secondary" />
        <Pressable>
          <Text style={styles.forgotenPass}>Esqueci a senha</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    gap: 100,
    justifyContent: "center",
    alignItems: "center",
  },
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
  inputs: {
    gap: 20,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  forgotenPass: {
    color: "red",
    fontSize: 15,
  },
});
