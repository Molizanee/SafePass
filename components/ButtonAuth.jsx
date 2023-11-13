import { decode as atob } from "base-64";
import * as AuthSession from "expo-auth-session";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

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

const ButtonAuth = ({ Product, type, title, navigation }) => {
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
        console.log(atob(jwtToken.split(".")[1]));
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded;
        setName(name);
        navigation.navigate("Tabs", { screen: "Homepage" });
      } else {
        console.log("Login failed");
        console.log(result);
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
      <View style={styles.textAndLogo}>
        <Product width={50} height={50} />
        <Text
          style={[
            styles.buttonText,
            type === "secondary" ? styles.buttonTextSecondary : "",
          ]}
        >
          {title}
        </Text>
      </View>
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
    fontSize: 18,
  },
  buttonSecondary: {
    backgroundColor: "#2B2B2B",
    borderWidth: 2,
    borderColor: "#0075FF",
  },
  buttonTextSecondary: {
    color: "#0075FF",
  },
  textAndLogo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
});

export default ButtonAuth;
