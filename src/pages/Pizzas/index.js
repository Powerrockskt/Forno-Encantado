import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const pizzaData = [
    {
      id: 1,
      title: 'Pizza Margherita',
      description: 'Molho de tomate, mussarela, manjericão fresco',
      image: require("../../assets/margherita.jpg"),
      precoMeia: 'R$ 20,00',
      precoInteira: 'R$ 50,00'
    },
    {
      id: 2,
      title: 'Pepperoni',
      description: 'Molho de tomate, queijo, e fatias de pepperoni (salame de cura seco).',
      image: require("../../assets/pepperoni.jpg"),
      precoMeia: 'R$ 20,00',
      precoInteira: 'R$ 50,00'
    },
    {
      id: 3,
      title: 'Quatro Queijos',
      description: 'Molho de tomate, mussarela, gorgonzola, parmesão e provolone.',
      image: require("../../assets/quatroqueijos.png"),
      precoMeia: 'R$ 25,00',
      precoInteira: 'R$ 55,00'
    },
    {
      id: 4,
      title: 'Calabresa',
      description: 'Molho de tomate, queijo, linguiça calabresa fatiada e cebolas.',
      image: require("../../assets/calabresa.jpg"),
      precoMeia: 'R$ 18,00',
      precoInteira: 'R$ 35,00'
    },
    {
      id: 5,
      title: 'Frango com Catupiry',
      description: 'Molho de tomate, queijo, frango desfiado e catupiry (um tipo de requeijão cremoso).',
      image: require("../../assets/frango.jpg"),
      precoMeia: 'R$ 18,00',
      precoInteira: 'R$ 35,00'
    },
    {
        id: 6,
        title: 'Banana com Canela',
        description: 'Banana, açúcar, canela',
        image: require("../../assets/banana_canela.jpg"),
        precoMeia: 'R$ 18,00',
        precoInteira: 'R$ 35,00'
      },
      {
        id: 7,
        title: 'Chocolate com Morango',
        description: 'Chocolate, morangos frescos, chantilly (opcional)',
        image: require("../../assets/chocolate_morango.png"),
        precoMeia: 'R$ 28,00',
        precoInteira: 'R$ 40,00'
      },
      {
        id: 8,
        title: 'Romeu e Julieta',
        description: 'Goiabada derretida, queijo branco',
        image: require("../../assets/romeu_julieta.png"),
        precoMeia: 'R$ 25,00',
        precoInteira: 'R$ 40,00'
      },
      {
        id: 9,
        title: 'Nutella com Frutas',
        description: 'Nutella, morangos, banana, outras frutas',
        image: require("../../assets/nutella_frutas.png"),
        precoMeia: 'R$ 20,00',
        precoInteira: 'R$ 45,00'
      },
      {
        id: 10,
        title: 'Maçã com Caramelo',
        description: 'Maçãs fatiadas, cobertura de caramelo, canela',
        image: require("../../assets/maca_caramelo.png"),
        precoMeia: 'R$ 25,00',
        precoInteira: 'R$ 50,00'
      },
      {
        id: 11,
        title: 'Portuguesa',
        description: 'Presunto, ovos, cebola, azeitonas, molho de tomate e mussarela.',
        image: require("../../assets/img/pizzaportuguesa.jpg"),
        precoMeia: 'R$ 25,00',
        precoInteira: 'R$ 45,00'
      },
      {
        id: 12,
        title: 'Atum',
        description: 'Atum, cebola, molho de tomate e mussarela.',
        image: require("../../assets/img/pizzaatum.jpg"),
        precoMeia: 'R$ 22,00',
        precoInteira: 'R$ 40,00'
      },
      {
        id: 13,
        title: 'Mussarela',
        description: 'Molho de tomate e bastante mussarela.',
        image: require("../../assets/img/pizzamussarela.jpeg"),
        precoMeia: 'R$ 20,00',
        precoInteira: 'R$ 35,00'
      },
      {
        id: 14,
        title: 'Napolitana',
        description: 'Molho de tomate, mussarela, tomate, parmesão e azeitonas.',
        image: require("../../assets/img/pizza-napolitana.jpg"),
        precoMeia: 'R$ 28,00',
        precoInteira: 'R$ 50,00'
      },
      {
        id: 15,
        title: 'Baiana',
        description: 'Calabresa, pimentão, cebola, molho de tomate e mussarela.',
        image: require("../../assets/img/baiana.png"),
        precoMeia: 'R$ 23,00',
        precoInteira: 'R$ 42,00'
      },
      {
        id: 16,
        title: 'Brigadeiro',
        description: 'Chocolate, leite condensado e granulado.',
        image: require("../../assets/img/Pizza-Brigadeiro.jpg"),
        precoMeia: 'R$ 18,00',
        precoInteira: 'R$ 35,00'
      },
      {
        id: 17,
        title: 'Vegetariana',
        description: 'Diversos vegetais como pimentão, cebola, azeitonas, cogumelos, molho de tomate e mussarela.',
        image: require("../../assets/img/pizza-vegetariana.jpeg"),
        precoMeia: 'R$ 26,00',
        precoInteira: 'R$ 48,00'
      },
      {
        id: 18,
        title: 'Escarola com Bacon',
        description: 'Escarola refogada, bacon, cebola, molho de tomate e mussarela.',
        image: require("../../assets/escarola-bacon.jpg"),
        precoMeia: 'R$ 24,00',
        precoInteira: 'R$ 45,00'
      },
  ];

  export function Pizzas() {
    const navigation = useNavigation();
  
    const handlePizzaPress = (pizza) => {
      navigation.navigate('PizzaDetails', { pizza });
    };
    
    const renderPizzaRow = (row) => (
      <View key={row[0].id} style={styles.row}>
        {row.map((pizza) => (
          <TouchableOpacity
            key={pizza.id}
            style={styles.pizzaContainer}
            onPress={() => handlePizzaPress(pizza)}
          >
            <Image source={pizza.image} style={styles.image} />
            <Text style={styles.title}>{pizza.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  
    const pizzasInRows = [];
    for (let i = 0; i < pizzaData.length; i += 2) {
      pizzasInRows.push([pizzaData[i], pizzaData[i + 1]]);
    }
  
    return (
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {pizzasInRows.map((row) => renderPizzaRow(row))}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 10,
      backgroundColor: '#FFE082',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    pizzaContainer: {
      width: windowWidth * 0.4, 
      margin: 10,
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: 150,
      borderRadius: 10,
    },
    title: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

