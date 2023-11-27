import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Carrinho({ route, navigation }) {
  const { pizza } = route.params;
  const [tipo, setTipo] = useState(route.params.tipo);
  const [preco, setPreco] = useState(tipo === "Broto" ? pizza.precoMeia : pizza.precoInteira);
  const [coca, setCoca] = useState(0);
  const [fanta, setFanta] = useState(0);

  useEffect(() => {
    const addPreco = () => {
      setPreco(tipo === "Broto" ? pizza.precoMeia : pizza.precoInteira);
    };

    return () => {
      addPreco();
    };
  }, [tipo, pizza]);

  const calcularTotal = () => {
    const precoRefrigerante = (coca + fanta) * 6;
    return preco + precoRefrigerante;
  };

  const handleCoca = (e) => {
    if ((coca === 0 && e !== "+") || preco <= 0) {
      return;
    }

    const newCoca = e === "+" ? coca + 1 : coca - 1;
    const precoRefrigerante = newCoca * 6;
    setCoca(newCoca);
    setPreco(tipo === "Broto" ? pizza.precoMeia - precoRefrigerante : pizza.precoInteira - precoRefrigerante);
  };

  const handleFanta = (e) => {
    if ((fanta === 0 && e !== "+") || preco <= 0) {
      return;
    }

    const newFanta = e === "+" ? fanta + 1 : fanta - 1;
    const precoRefrigerante = newFanta * 6;
    setFanta(newFanta);
    setPreco(tipo === "Broto" ? pizza.precoMeia - precoRefrigerante : pizza.precoInteira - precoRefrigerante);
  };

  const handleConfirmar = () => {
    const total = calcularTotal();
    console.log("Compra confirmada:", { pizza, tipo, precoPizza: preco, coca, fanta, total });

    // Aqui você pode adicionar a lógica para confirmar a compra
    // Pode chamar uma API, adicionar ao carrinho global, etc.
    navigation.navigate("DeliveryOption"); // Redirecionar para a página DeliveryOption
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.bigText}>{pizza.title}</Text>
          {tipo === "Broto" ? (
            <Text> Broto: {pizza.precoMeia},00 </Text>
          ) : (
            <Text> Inteira {pizza.precoInteira},00</Text>
          )}
        </View>

        <Text style={[styles.bigText, styles.linha, styles.evenly]}>
          Refrigerante 6,00 cada
        </Text>
        <View style={[styles.linha]}>
          <View style={styles.linha}>
            <TouchableOpacity onPress={() => handleCoca("+")} style={styles.signButton}>
              <Text style={styles.bigText}> + </Text>
            </TouchableOpacity>
            <Text style={styles.bigText}>{coca}</Text>
            <TouchableOpacity onPress={() => handleCoca("-")} style={styles.signButton}>
              <Text style={styles.bigText}> - </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.bigText}>Coca-Cola</Text>
        </View>

        <View style={[styles.linha]}>
          <View style={styles.linha}>
            <TouchableOpacity onPress={() => handleFanta("+")} style={styles.signButton}>
              <Text style={styles.bigText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.bigText}>{fanta}</Text>
            <TouchableOpacity onPress={() => handleFanta("-")} style={styles.signButton}>
              <Text style={styles.bigText}>-</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.bigText}>Fanta</Text>
        </View>
        <View style={styles.subContainer}>
          <Text> TOTAL: {calcularTotal()},00 </Text>
        </View>
      </View>

      <View style={styles.subContainer}>
        <TouchableOpacity onPress={handleConfirmar} style={styles.confirmar}>
          <Text style={styles.bigText}>Confirmar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFE082",
  },
  centeredContainer: {
    alignItems: "center",
  },
  subContainer: {
    alignItems: "center",
    margin: 15,
  },
  linha: {
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    margin: 5,
  },
  signButton: {
    backgroundColor: "#EF5350",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bigText: {
    fontSize: 20,
  },
  evenly: {
    justifyContent: "space-evenly",
  },
  confirmar: {
    width: "80%",
    height: 40,
    color: "black",
    backgroundColor: "#EF5350",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Carrinho;
