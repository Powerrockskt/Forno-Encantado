// PizzaDetailsScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';

export function PizzaDetailsScreen({ route }) {
  const { pizza } = route.params;

  return (
    <View>
      <Image source={pizza.image} style={{ width: 200, height: 200 }} />
      <Text>{pizza.title}</Text>
      <Text>{pizza.description}</Text>
      {/* Adicione mais detalhes da pizza conforme necessário */}
    </View>
  );
}
