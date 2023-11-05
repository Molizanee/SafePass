import { StyleSheet, Text, View } from "react-native";

import ButtonAuth from "../components/ButtonAuth";

import Logo from "../components/Logo";

export default function Login({ navigation }) {
  return (
    <View style={styles.grid}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.content}>
        <View style={styles.inputs}></View>
        <View style={styles.ButtonWithRoutes}>
          <Text style={styles.title}>
            Utilizamos o Auth0 como autenticação!
          </Text>
          <ButtonAuth title="Login com Google" navigation={navigation} />
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
  title: {
    fontSize: 20,
    color: "#858585",
  },
  content: {
    gap: 20,
    marginTop: 60,
  },
  inputs: {
    gap: 20,
  },
  ButtonWithRoutes: {
    marginTop: 60,
    gap: 20,
  },
  forgotenPass: {
    color: "red",
    fontSize: 15,
    alignSelf: "center",
  },
});
