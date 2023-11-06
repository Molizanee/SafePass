import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  //Buscar senha
  const getItem = async (key) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords) || [];
    } catch (error) {
      console.log("Erro ao buscar", error);
      return [];
    }
  };
  //Salvar senha
  const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key);

      passwords.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log("ERRO AO SALVAR", error);
    }
  };

  //Remover senha
  const removeItem = async (key, item) => {
    try {
      let passwords = await getItem(key);
      let myPasswords = passwords.filter((password) => {
        return password !== item;
      });
      await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
      return myPasswords;
    } catch (error) {
      console.log("ERRO AO DELETAR", error);
    }
  };

  const getAllKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch (error) {
      console.log("ERRO AO PEGAR KEYS", error);
    }
  };

  const multiGet = async (keys) => {
    try {
      const passwords = await AsyncStorage.multiGet(keys);
      return passwords;
    } catch (error) {
      console.log("ERRO AO PEGAR KEYS", error);
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
    getAllKeys,
    multiGet,
  };
};

export default useStorage;
