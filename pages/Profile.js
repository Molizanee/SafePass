import { Image, Text, View, StyleSheet } from "react-native";
import { IconUser } from "tabler-icons-react-native";

const Profile = () => {
  return (
    <View style={styles.grid}>
      <Text style={styles.text}>Suas Informações</Text>
      <View style={styles.profileImage}>
        <IconUser size={100} color="#858585" />
      </View>
      <Text style={styles.userName}>dmolizane@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#121212",
  },
  text: {
    fontSize: 18,
    color: "#858585",
    marginTop: 20,
    marginBottom: 40,
    flex: 0,
    alignSelf: "flex-start",
  },
  profileImage: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: "#2B2B2B",
    borderWidth: 2,
    borderColor: "#0075FF",
  },
  userName: {
    fontSize: 15,
    color: "#0075FF",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Profile;
