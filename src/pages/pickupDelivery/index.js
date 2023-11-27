import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts, LeagueSpartan_100Thin, LeagueSpartan_700Bold } from '@expo-google-fonts/league-spartan';

export function PickupDelivery() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.message}>
          Pedido Realizado com Sucesso!
        </Text>
        <Image source={require("../../assets/verificar.png")} style={styles.image} />
      </View>
      <View style={styles.rectangleContainer}>
        <Text style={styles.message2}>
          Seu pedido ficará pronto em até 40 minutos!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE082',
  },
  content: {
    alignItems: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 20,
    marginBottom: 25,
    textAlign: 'center',
    fontFamily: 'LeagueSpartan_700Bold',
    fontWeight: 'bold',
  },
  image: {
    width: 90,
    height: 90,
  },
  rectangleContainer: {
    backgroundColor: '#EF5350',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginTop: '20%',
    width: '80%', 
  },
  message2: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
