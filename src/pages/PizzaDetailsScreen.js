import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useFonts, LeagueSpartan_100Thin, LeagueSpartan_700Bold } from '@expo-google-fonts/league-spartan';

export function PizzaDetailsScreen({ route }) {
  const { pizza } = route.params;
  const [pizzaOption, setPizzaOption] = useState('Inteira');
  const [showAddButton, setShowAddButton] = useState(false);

  const handlePizzaOptionChange = (option) => {
    setPizzaOption(option);
    setShowAddButton(option === 'Meia');
  };

  const [fontsLoaded] = useFonts({
    LeagueSpartan_100Thin,
    LeagueSpartan_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleAddAnotherPizza = () => {
    // Adicione a lógica para adicionar outra pizza aqui
  };

  return (
    <View style={styles.container}>
      <Image source={pizza.image} style={styles.image} />
      <Text style={styles.title}>{pizza.title}</Text>
      <Text style={styles.description}>{pizza.description}</Text>
      <Text style={styles.price}>Preço Meia: {pizza.precoMeia}</Text>
      <Text style={styles.price}>Preço Inteira: {pizza.precoInteira}</Text>

      <View style={styles.filler} />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Inteira</Text>
        <Switch
          value={pizzaOption === 'Inteira'}
          onValueChange={() => handlePizzaOptionChange('Inteira')}
          style={styles.switch}
        />

        <Text style={{ marginHorizontal: 10 }} />

        <Text style={styles.switchLabel}>Meia</Text>
        <Switch
          value={pizzaOption === 'Meia'}
          onValueChange={() => handlePizzaOptionChange('Meia')}
          style={styles.switch}
        />
      </View>

      {showAddButton && (
        <TouchableOpacity style={styles.addButton} onPress={handleAddAnotherPizza}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Adicionar Pizza</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button} onPress={() => {/* Adicione a lógica para ir para o carrinho */}}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFE082',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EF5350',
    marginBottom: 5,
  },
  filler: {
    flex: 1,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#EF5350',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 35,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  switch: {
    transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }], // Ajuste o tamanho conforme necessário
    marginRight: 10
  },
  switchLabel: {
    fontSize: 25,
    color: '#EF5350',
    fontFamily: 'LeagueSpartan_700Bold',
  },
  addButton: {
    backgroundColor: '#EF5350',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 30,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default PizzaDetailsScreen;
