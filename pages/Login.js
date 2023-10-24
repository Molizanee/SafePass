import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { IconLock, IconMail } from "tabler-icons-react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.grid}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.content}>
        <View style={styles.inputs}>
          <Input Icon={IconMail} placeholder="Seu E-mail" />
          <Input
            Icon={IconLock}
            placeholder="Senha de Acesso"
            password={true}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title="Login"
            route="Tabs"
            routeOptions={{ screen: "Homepage" }}
            navigation={navigation}
          />
          <Pressable>
            <Text style={styles.forgotenPass}>Esqueci a senha</Text>
          </Pressable>
          <Button
            title="Criar Conta"
            type="secondary"
            route="Tabs"
            routeOptions={{ screen: "CreateAccount" }}
            navigation={navigation}
          />
        </View>
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
    gap: 80,
  },
  logo: {
    alignItems: "center",
    marginTop: 70,
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
  content: {
    gap: 20,
    marginTop: 60,
  },
  inputs: {
    gap: 20,
  },
  buttons: {
    gap: 20,
  },
  forgotenPass: {
    color: "red",
    fontSize: 15,
    alignSelf: "center",
  },
});
