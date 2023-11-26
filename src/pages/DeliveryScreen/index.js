import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

export function DeliveryScreen() {
  const [deliveryOption, setDeliveryOption] = useState('');
  const [address, setAddress] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [complemento, setComplemento] = useState('');
  const [instrucoes, setInstrucoes] = useState('');
  const [choiceMade, setChoiceMade] = useState(false);
  const [showForm, setShowForm] = useState(false); // Novo estado para rastrear se o formulário deve ser exibido

  const handleDeliveryOption = (option) => {
    setDeliveryOption(option);
    setChoiceMade(true);
    setShowForm(true); // Quando uma escolha é feita, exibir o formulário
  };

  const handleContinue = () => {
    // Lógica para prosseguir após a escolha
    console.log('Prosseguir...');
  };

  const handleGoBack = () => {
    // Resetar as escolhas e o formulário
    setDeliveryOption('');
    setAddress('');
    setBairro('');
    setNumero('');
    setCep('');
    setComplemento('');
    setInstrucoes('');
    setChoiceMade(false);
    setShowForm(false);
  };

  const renderDeliveryOptions = () => {
    if (choiceMade) {
      return null; // Se a escolha foi feita, não renderize os botões de opção
    }

    return (
      <View>
        <TouchableOpacity
          style={[styles.optionButton, deliveryOption === 'pickup' && styles.selectedOption]}
          onPress={() => handleDeliveryOption('pickup')}
        >
          <Text style={styles.optionText}>Retirar no Local</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.optionButton, deliveryOption === 'delivery' && styles.selectedOption]}
          onPress={() => handleDeliveryOption('delivery')}
        >
          <Text style={styles.optionText}>Entregar em Casa</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDeliveryForm = () => {
    if (!showForm) {
      return null; // Se o formulário não deve ser exibido, não renderize
    }

    return (
      <View>
        <Text style={styles.message}>
          {deliveryOption === 'pickup'
            ? 'Seu pedido ficará pronto para retirada em até 40 minutos.'
            : 'Por favor, insira o endereço de entrega:'}
        </Text>
        <TextInput
          style={styles.addressInput}
          placeholder="Endereço"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        {/* Adicione os outros campos do formulário aqui */}
        <TextInput
          style={styles.addressInput}
          placeholder="Bairro"
          value={bairro}
          onChangeText={(text) => setBairro(text)}
        />
        <TextInput
          style={styles.addressInput}
          placeholder="Número"
          value={numero}
          onChangeText={(text) => setNumero(text)}
        />
        <TextInput
          style={styles.addressInput}
          placeholder="CEP"
          value={cep}
          onChangeText={(text) => setCep(text)}
        />
        <TextInput
          style={styles.addressInput}
          placeholder="Complemento"
          value={complemento}
          onChangeText={(text) => setComplemento(text)}
        />
        <TextInput
          style={styles.addressInput}
          placeholder="Instruções para o entregador"
          value={instrucoes}
          onChangeText={(text) => setInstrucoes(text)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opção de Entrega</Text>

      {renderDeliveryOptions()}
      
      {renderDeliveryForm()}

      {choiceMade && (
        <View style={styles.buttonContainer}>
          <Button title="Voltar" onPress={handleGoBack} />
          <Button title="Prosseguir" onPress={handleContinue} />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  addressInput: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  }
});

