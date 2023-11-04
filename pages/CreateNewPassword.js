import { Text, StyleSheet, View } from "react-native";
import { IconLock, IconWorldWww } from "tabler-icons-react-native";
import Input from "../components/Input";
import ButtonWithRoute from "../components/ButtonWithRoute";
import Button from "../components/Button";
import Slider from "@react-native-community/slider";
import { useState } from "react";

const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+~`|}{[]:;?><,./-=";

const CreateNewPassword = () => {
  const [size, setSize] = useState(10);

  const [passwordValue, setPasswordValue] = useState("");

  const generatePassword = (length) => {
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
      setPasswordValue(password);
    }
    console.log(`Senha gerada: ${password}`);
  };
  return (
    <View style={styles.grid}>
      <Text style={styles.text}>Criar nova senha</Text>
      <View style={styles.titlePosition}>
        <Text style={styles.title}>Criar nova senha</Text>
      </View>
      <View style={styles.inputsAndButtonWithRoutes}>
        <Input Icon={IconWorldWww} placeholder="E-mail, site ou app" />
        <Input
          Icon={IconLock}
          placeholder="Senha de Acesso"
          password={true}
          value={passwordValue}
          setText={setPasswordValue}
        />
        <View style={styles.sizeBar}>
          <Slider
            style={{ height: 40 }}
            minimumValue={10}
            maximumValue={25}
            value={size}
            onValueChange={(value) => setSize(value.toFixed(0))}
            minimumTrackTintColor="#858585"
            maximumTrackTintColor="#0075FF"
            thumbTintColor="#0075FF"
          />
        </View>
        <Text style={styles.passwordSize}>
          Tamanho da senha: {size} caracteres
        </Text>
        <Button
          title="Gerar Senha Aleatória"
          type="secondary"
          execute={() => generatePassword(size)}
        />
        <ButtonWithRoute title="Salvar Senha" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#121212",
  },
  text: {
    fontSize: 15,
    color: "#858585",
    marginTop: 20,
  },
  title: {
    fontSize: 38,
    color: "#0075FF",
  },
  titlePosition: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  inputsAndButtonWithRoutes: {
    flex: 3,
    gap: 20,
  },
  passwordSize: {
    fontSize: 18,
    color: "#858585",
    textAlign: "center",
  },
  sizeBar: {
    backgroundColor: "#2B2B2B",
    flex: 0,
    alignItems: "stretch",
    justifyContent: "center",
    height: 70,
    borderRadius: 25,
    padding: 20,
  },
});

export default CreateNewPassword;
