import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { buscarContatos } from "../types/db";
import Contato from "../components/Contato";
import { FAB } from "@rneui/themed";

export default function ListaScreen({ navigation }: any) {
  const [contatos, setContatos] = useState<any[]>([]);

  const carregar = async () => {
    const lista = await buscarContatos();
    setContatos(lista);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", carregar);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      {contatos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum contato encontrado</Text>
        </View>
      ) : (
        <FlatList
          data={contatos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Contato
              dados={item}
              navigation={navigation}
              atualizar={carregar}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
      <FAB
        placement="right"
        onPress={() => navigation.navigate("Adicionar")}
        icon={{ name: "add", color: "white" }}
        color="#000"
        style={styles.fab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dce5e8",
    padding: 15
  },
  listContent: {
    paddingBottom: 80
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
    fontSize: 18,
    color: "#fff",
    fontStyle: "italic",
    textAlign: "center"
  },
  fab: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6
  }
});
