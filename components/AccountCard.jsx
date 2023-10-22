import { View, Text, StyleSheet, Image } from "react-native";

const AccountCard = ({ account, Product }) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Product width={80} height={80} />
        </View>
        <Text style={styles.text}>{account}</Text>
      </View>

      <View style={styles.bar} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 20,
    height: 130,
    backgroundColor: "#2B2B2B",
    borderRadius: 25,
  },
  text: {
    fontSize: 15,
    color: "#858585",
  },
  bar: {
    height: 10,
    width: 80,
    backgroundColor: "858585",
  },
});

export default AccountCard;
