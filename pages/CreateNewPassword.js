import { Text, StyleSheet, View } from "react-native";

const CreateNewPassword = () => {
  return (
    <View style={styles.grid}>
      <Text style={styles.text}>Criar nova senha</Text>
      <View style={styles.titlePosition}>
        <Text style={styles.title}>Criar nova senha</Text>
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
});

export default CreateNewPassword;
