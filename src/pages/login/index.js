import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  
  useEffect(() => {
    const userData = route.params?.userData;
    if (userData) {
      setEmail(userData.email);
      setSenha(userData.senha);
    }
  }, [route.params]);

  const handleLogin = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      const profile = jsonValue ? JSON.parse(jsonValue) : null;
  
      if (profile && profile.email === email && profile.senha === senha) {
        console.log("Login bem-sucedido");
        
        navigation.navigate("LoggedProfile", {
          userData: {
            nome: profile.nome,
            email: profile.email,
            tel: profile.tel,
          },
        });
      } else {
        console.log("E-mail ou senha incorretos");
        setErrorMessage("E-mail ou senha incorretos. Tente novamente.");
      }
    } catch (e) {
      console.error("Erro ao ler os dados do usuário:", e);
      setErrorMessage("Erro ao tentar fazer login. Tente novamente.");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
      keyboardVerticalOffset={-300}
    >
      <TextInput
        style={styles.inputText}
        selectionColor={"red"}
        placeholder={"Email"}
        placeholderTextColor={"white"}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.inputText}
        selectionColor={"red"}
        secureTextEntry
        placeholder={"Senha"}
        placeholderTextColor={"white"}
        onChangeText={setSenha}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
  loginButton: {
    backgroundColor: "#F09600",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
});
