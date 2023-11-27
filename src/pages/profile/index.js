import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const [isLogged] = useState(false);
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      {isLogged ? (
        <LoggedProfile />
      ) : (
        <View style={styles.main}>
          <Text style={styles.text}>
            Para aproveitar melhor o nosso aplicativo, faça Login ou Crie uma Conta
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE082",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#EF5350",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: 'LeagueSpartan_700Bold',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center'
  }
  
});
