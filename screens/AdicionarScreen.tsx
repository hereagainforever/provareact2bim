import { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { inserirContato } from "../types/db";
import { TextInputMask } from "react-native-masked-text";

export default function AdicionarScreen({ navigation }: any) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const salvar = async () => {
    if (!nome || !telefone) {
      Alert.alert("Preencha todos os campos");
      return;
    }
    await inserirContato(nome, telefone);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#b5bcbf"
      />
      <TextInputMask
        type={"custom"}
        options={{
          mask: "+99 (99) 99999-9999",
        }}
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
        placeholder="+__ (__) _____-____"
        placeholderTextColor="#b5bcbf"
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#dce5e8"
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    color: "#000",
    shadowColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  button: {
    backgroundColor: "lightgreen",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#fff",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5
  }
});
  