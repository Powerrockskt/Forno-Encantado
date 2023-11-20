import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useFonts, LeagueSpartan_100Thin, LeagueSpartan_700Bold } from '@expo-google-fonts/league-spartan';
import { PizzaCarousel } from "../../components/Pizza-Carousel";
import { PizzaCarousel2 } from "../../components/Pizza-Carousel2"
import { useNavigation } from '@react-navigation/native';

export function Inicial() {
  const [fonteLoaded] = useFonts({
    LeagueSpartan_100Thin,
    LeagueSpartan_700Bold,
  });

  if (!fonteLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Como está sua fome de pizza hoje?
      </Text>
      <Text>Pizzas mais pedidas: </Text>
      <Text> Salgadas: </Text>
      <PizzaCarousel />
      <PizzaCarousel2 />
      {/* Adicione outras categorias conforme necessário */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE082',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'LeagueSpartan_700Bold', 
    fontSize: 16,
    marginTop: 15,
  },
});