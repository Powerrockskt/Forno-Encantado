import { StatusBar } from "expo-status-bar";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const [senhasBatem, setSenhasBatem] = useState(false);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      console.error("Erro ao salvar dados:", e);
    }
  };

  const handleUser = () => {
    if (senha === senhaConfirm) {
      setSenhasBatem(false);

      const newUser = {
        nome: name,
        email: email,
        senha: senha,
        tel: tel,
      };

      // Armazena os dados do novo usuário
      storeData(newUser);

      // Redireciona para a tela de login
      navigation.navigate('Login');
    } else {
      setSenhasBatem(true);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
      keyboardVerticalOffset={-300}
    >
      <StatusBar style="auto" />

      <TextInput
        style={styles.inputText}
        selectionColor={"red"}
        placeholder={"Email"}
        placeholderTextColor={"white"}
        onChangeText={setEmail}
      />
      <TextInput
        onChangeText={setName}
        style={styles.inputText}
        selectionColor={"red"}
        placeholder={"Nome"}
        placeholderTextColor={"white"}
      />
      <TextInput
        onChangeText={setTelefone}
        style={styles.inputText}
        selectionColor={"red"}
        placeholder={"Telefone"}
        keyboardType="numeric"
        maxLength={11}
        placeholderTextColor={"white"}
      />
      <TextInput
        onChangeText={setSenha}
        style={styles.inputText}
        selectionColor={"red"}
        secureTextEntry
        placeholder={"Senha"}
        placeholderTextColor={"white"}
      />
      <TextInput
        onChangeText={setSenhaConfirm}
        style={styles.inputText}
        selectionColor={"red"}
        secureTextEntry
        placeholder={"Confirmar senha"}
        placeholderTextColor={"white"}
      />
      {senhasBatem && (
        <Text style={styles.errorText}>
          Suas senhas não estão batendo. Tente novamente.
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={handleUser}>
          <Text> Confirmar </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFE082",
  },
  inputText: {
    width: "90%",
    borderRadius: 5,
    height: 50,
    paddingLeft: 5,
    backgroundColor: "#EF5350",
    marginBottom: 25,
    color: "white",
  },
  buttonContainer: {
    marginTop: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
  },
  registerButton: {
    backgroundColor: "#F09600",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 15,
  },
});
