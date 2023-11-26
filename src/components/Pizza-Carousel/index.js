import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  }
];

const styles = {
  pizzaItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  pizzaImage: {
    width: 300, 
    height: 130, 
    borderRadius: 10, 
  },
  textCenter: {
    textAlign: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  scrollViewContainer: {
    marginBottom: 30,
  },
  scrollViewContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
};

export function PizzaCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();

  const renderPizzaItem = (pizza) => {
    return (
      <TouchableOpacity
        key={pizza.id}
        style={styles.pizzaItemContainer}
        onPress={() => navigation.navigate('PizzaDetails', { pizza })} 
      >
        <Image source={pizza.image} style={styles.pizzaImage} />
        <Text style={styles.textCenter}>{pizza.title}</Text>
      </TouchableOpacity>
    );
  };

  const handlePrev = () => {
    const newActiveSlide = activeSlide - 1 >= 0 ? activeSlide - 1 : pizzaData.length - 1;
    setActiveSlide(newActiveSlide);
  };

  const handleNext = () => {
    const newActiveSlide = (activeSlide + 1) % pizzaData.length;
    setActiveSlide(newActiveSlide);
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const slide = Math.floor(event.nativeEvent.contentOffset.x / windowWidth);
          setActiveSlide(slide);
        }}
        style={styles.scrollViewContainer}
      >
        {pizzaData.map((pizza, index) => (
          <React.Fragment key={index}>
            {index === activeSlide && renderPizzaItem(pizza)}
          </React.Fragment>
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -20, alignItems: 'center' }}>
        {pizzaData.map((_, index) => (
          <View
            key={index}
            style={{
              ...styles.paginationDot,
              backgroundColor: index === activeSlide ? '#EF5350' : 'rgba(0, 0, 0, 0.2)',
            }}
          />
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -10 }}>
        <TouchableOpacity style={styles.arrowButton} onPress={handlePrev}>
          <Icon name="arrow-back" size={30} color="#EF5350" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton} onPress={handleNext}>
          <Icon name="arrow-forward" size={30} color="#EF5350" />
        </TouchableOpacity>
      </View>
    </View>
  );
}