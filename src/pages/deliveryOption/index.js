import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function DeliveryOption() {
  const navigation = useNavigation();

  const handleRetirarPress = () => {
    navigation.navigate('PickupDelivery');
  };

  const handleEntregarPress = () => {
    navigation.navigate('Deliver');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forma de Entrega: </Text>
      <TouchableOpacity style={styles.button} onPress={handleRetirarPress}>
        <Text style={styles.buttonText}>Retirar no Local</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEntregarPress}>
        <Text style={styles.buttonText}>Entregue-me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE082'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#EF5350',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 35,
    marginBottom: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
