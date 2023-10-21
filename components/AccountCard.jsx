import { View, Text, StyleSheet, Image } from "react-native";

const AccountCard = () => {
  return (
    <>
      <View style={styles.container}>
        <Image src="../assets/splash.png" height={70} width={70} />
        <Text>ola</Text>
      </View>
      <View style={styles.bar} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "#2B2B2B",
    borderRadius: 25,
  },
  text: {
    fontSize: 20,
    color: "#ffff",
  },
  bar: {
    height: 10,
    width: 80,
    backgroundColor: "858585",
  },
});

export default AccountCard;
