import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export function LoggedProfile() {
  const [profile, setProfile] = useState({
    name: "",
    address: "",
    tel: "",
  });
  const navigation = useNavigation();
  const route = useRoute();

  // useEffect para obter os dados passados como parâmetro
  useEffect(() => {
    const userData = route.params?.userData || {};
    setProfile({
      name: userData.nome || "",
      address: userData.endereco || "",
      tel: userData.tel || "",
    });
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{profile.name}</Text>
      <View>
        <TouchableOpacity style={[styles.containerItem, styles.bgRed]}>
          <Text style={styles.red}>Meus Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItem}>
          <Text>Meu Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.containerItem, styles.bgRed]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.red}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  name: {
    paddingTop: 40,
    paddingBottom: 50,
    fontSize: 30,
    paddingLeft: 20,
  },
  containerItem: {
    padding: 25,
  },
  bgRed: {
    backgroundColor: "#EF5350",
  },
  red: {
    color: "#FFFFFF",
  },
});
