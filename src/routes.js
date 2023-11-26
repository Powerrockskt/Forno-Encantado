import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/home';
import { Inicial } from './pages/telaInicial';
import { PizzaDetailsScreen } from './pages/PizzaDetailsScreen';
import { Ionicons } from '@expo/vector-icons';
import { Pizzas } from './pages/Pizzas';
import { Image } from 'react-native';
import { DeliveryScreem, DeliveryScreen } from './pages/DeliveryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="PizzaDetails" component={PizzaDetailsScreen} />
    <Stack.Screen name="Inicial" component={Inicial} options={{
      headerShown: false,
    }} />
  </Stack.Navigator>
);

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Inicial') {
            iconName = focused ? 'inicial' : 'inicial-outline'; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#EF5350',
        inactiveTintColor: '#F09600',
        tabBarActiveBackgroundColor: '#F09600',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pizzas"
        component={Pizzas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icon-pizza.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}
