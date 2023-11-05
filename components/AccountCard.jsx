import { View, Text, StyleSheet, Pressable } from "react-native";
import { IconCopy } from "tabler-icons-react-native";

const AccountCard = ({ Product, account, password }) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Product width={80} height={80} />
        </View>
        <View style={styles.data}>
          <Text style={styles.text}>{account}</Text>
          <Text style={styles.text}>{password}</Text>
        </View>
        <Pressable>
          <IconCopy color="#0075FF" size={35} stroke={1.5} />
        </Pressable>
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
  data: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
});

export default AccountCard;
