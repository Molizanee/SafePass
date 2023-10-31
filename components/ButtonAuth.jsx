import * as AuthSession from "expo-auth-session";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { decode as atob, encode as btoa } from "base-64";

const auth0ClientId = "QREyoN2vTCN98RgRlvwQSvmeE798Fd0R";
const authorizationEndpoint =
  "https://dev-52rb60tkluh0uiio.us.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const ButtonAuth = ({ type, title, navigation }) => {
  const [name, setName] = useState(null);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      responseType: "id_token",
      // retrieve the user's profile
      scopes: ["openid", "profile"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce",
      },
    },
    { authorizationEndpoint }
  );

  console.log(`Redirect URL: ${redirectUri}`);

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "Algo deu errado!"
        );
        return;
      }
      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        console.log(jwtToken);
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded;
        setName(name);
        navigation.navigate("Tabs", { screen: "Homepage" });
      } else {
        navigation.navigate("Login");
      }
    }
  }, [result, navigation]);

  return (
    <Pressable
      disabled={!request}
      onPress={() => promptAsync({ useProxy })}
      style={[
        styles.button,
        type === "secondary" ? styles.buttonSecondary : "",
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          type === "secondary" ? styles.buttonTextSecondary : "",
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    width: "100%",
    backgroundColor: "#0075FF",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  buttonSecondary: {
    backgroundColor: "#2B2B2B",
    borderWidth: 2,
    borderColor: "#0075FF",
  },
  buttonTextSecondary: {
    color: "#0075FF",
  },
});

export default ButtonAuth;
