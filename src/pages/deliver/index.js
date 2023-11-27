import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useFonts, LeagueSpartan_100Thin, LeagueSpartan_700Bold } from '@expo-google-fonts/league-spartan';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useNavigation } from '@react-navigation/native';
import { Payment } from '../payment';

export function Deliver() {
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [complemento, setComplemento] = useState('');
  const [instrucoes, setInstrucoes] = useState('');

  const navigation = useNavigation();

  const handleProsseguir = async () => {
    try {
      const deliveryInfo = {
        endereco,
        bairro,
        numero,
        cep,
        complemento,
        instrucoes,
      };
      await AsyncStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo));
      navigation.navigate('Payment');
    } catch (error) {
      console.error('Erro ao salvar no AsyncStorage:', error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Adicionar Informações de Entrega</Text>
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          onChangeText={setBairro}
        />
        <TextInput
          style={styles.input}
          placeholder="Número"
          onChangeText={setNumero}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          onChangeText={setCep}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Complemento"
          onChangeText={setComplemento}
        />
        <TextInput
          style={styles.input}
          placeholder="Instruções adicionais para o entregador"
          onChangeText={setInstrucoes}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleProsseguir}>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE082',
    padding: 16,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'LeagueSpartan_700Bold', 
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#EF5350',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#EF5350',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
