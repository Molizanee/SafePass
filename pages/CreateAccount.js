import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { IconLock, IconLockPlus, IconMail } from "tabler-icons-react-native";

const CreateAccount = () => {
  return (
    <View style={styles.grid}>
      <View style={styles.titlePosition}>
        <Text style={styles.title}>Criar conta</Text>
      </View>
      <View style={styles.inputsAndButton}>
        <Input Icon={IconMail} placeholder="Seu e-mail" />
        <Text style={styles.text}>
          Sua senha de acesso não pode ser recuperada em caso de perca!
        </Text>
        <Input Icon={IconLock} placeholder="Sua senha de acesso" />
        <Input Icon={IconLockPlus} placeholder="Repita a senha de acesso" />
        <Button title="Criar Conta!" />
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
  title: {
    fontSize: 38,
    color: "#0075FF",
  },
  titlePosition: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    fontSize: 15,
    color: "red",
  },
  inputsAndButton: {
    flex: 1,
    gap: 20,
    marginTop: -400,
  },
});

export default CreateAccount;
