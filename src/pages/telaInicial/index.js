import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useFonts, LeagueSpartan_100Thin, LeagueSpartan_700Bold } from '@expo-google-fonts/league-spartan';
import { PizzaCarousel } from "../../components/Pizza-Carousel";
import { PizzaCarousel2 } from "../../components/Pizza-Carousel2"
import { useNavigation } from '@react-navigation/native';
import { Pizzas } from "../Pizzas";

export function Inicial() {
  const navigation = useNavigation();

  const [fonteLoaded] = useFonts({
    LeagueSpartan_100Thin,
    LeagueSpartan_700Bold,
  });

  if (!fonteLoaded) {
    return null;
  }


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>
        Como está sua fome de pizza hoje?
      </Text>
      <Text style={styles.subHeaderText}>
        Pizzas mais pedidas:
      </Text>
      <Text style={styles.categoryText}>
        Salgadas:
      </Text>
      <PizzaCarousel />
      <Text style={styles.categoryText}>
        Doces:
      </Text>
      <PizzaCarousel2 />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE082',
    padding: 16, 
  },
  headerText: {
    textAlign: 'center',
    fontFamily: 'LeagueSpartan_700Bold', 
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  subHeaderText: {
    textAlign: 'center',
    fontFamily: 'LeagueSpartan_700Bold', 
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  categoryText: {
    textAlign: 'center',
    fontFamily: 'LeagueSpartan_700Bold', 
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    alignSelf: 'center',
  }
});
