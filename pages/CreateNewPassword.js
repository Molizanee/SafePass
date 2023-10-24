import { Text, StyleSheet, View } from "react-native";
import { IconLock, IconWorldWww } from "tabler-icons-react-native";
import Input from "../components/Input";
import Button from "../components/Button";

const CreateNewPassword = () => {
  return (
    <View style={styles.grid}>
      <Text style={styles.text}>Criar nova senha</Text>
      <View style={styles.titlePosition}>
        <Text style={styles.title}>Criar nova senha</Text>
      </View>
      <View style={styles.inputsAndButtons}>
        <Input Icon={IconWorldWww} placeholder="E-mail, site ou app" />
        <Input Icon={IconLock} placeholder="Senha de Acesso" password={true} />
        <Button title="Gerar Senha Aleatória" type="secondary" />
        <Button title="Salvar Senha" />
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
    marginTop: 100,
  },
  inputsAndButtons: {
    flex: 1,
    gap: 20,
    marginTop: -400,
  },
});

export default CreateNewPassword;
