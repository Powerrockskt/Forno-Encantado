import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const pizzaData = [
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
    marginBottom: 10,
  },
  arrowButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
};

export function PizzaCarousel2() {
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
          const slide = Math.floor(event.nativeEvent.contentOffset.x / 300);
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
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -10  }}>
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
