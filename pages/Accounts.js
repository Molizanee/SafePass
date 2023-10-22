import { ScrollView, View, Text, StyleSheet } from "react-native";
import AccountCard from "../components/AccountCard";
import Google from "../assets/google.svg";

const Accounts = () => {
  return (
    <ScrollView>
      <View style={styles.grid}>
        <Text style={styles.text}>Suas senhas</Text>
        <View style={styles.accountCards}>
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
          <AccountCard account="dmolizane@gmail.com" Product={Google} />
        </View>
      </View>
    </ScrollView>
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
    fontSize: 18,
    color: "#858585",
    marginTop: 20,
    marginBottom: 40,
  },
  accountCards: {
    gap: 5,
  },
});

export default Accounts;
