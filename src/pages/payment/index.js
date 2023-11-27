import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

export function Payment() {
  const navigation = useNavigation();
  const [isLevarTrocoModalVisible, setLevarTrocoModalVisible] = useState(false);
  const [isLevarMaquininhaModalVisible, setLevarMaquininhaModalVisible] = useState(false);

  const handleLevarTroco = () => {
    setLevarTrocoModalVisible(true);
  };

  const handleLevarMaquininha = () => {
    setLevarMaquininhaModalVisible(true);
  };

  const handleLevarTrocoModalClose = () => {
    setLevarTrocoModalVisible(false);
  };

  const handleLevarMaquininhaModalClose = () => {
    setLevarMaquininhaModalVisible(false);
  };

  const handleProsseguir = () => {
    navigation.navigate('PickupDelivery');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Selecione uma opção de pagamento:</Text>

      {/* Botão "Levar Troco" */}
      <TouchableOpacity style={styles.button} onPress={handleLevarTroco}>
        <Image source={require("../../assets/troco.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Levar Troco</Text>
      </TouchableOpacity>

      {/* Botão "Levar Maquininha" */}
      <TouchableOpacity style={styles.button} onPress={handleLevarMaquininha}>
        <Image source={require("../../assets/maquininha.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Levar Maquininha</Text>
      </TouchableOpacity>

      {/* Botão "Prosseguir" */}
      <TouchableOpacity style={styles.prosseguirButton} onPress={handleProsseguir}>
        <Text style={styles.prosseguirButtonText}>Prosseguir</Text>
      </TouchableOpacity>

      {/* Modal para "Levar Troco" */}
      <Modal isVisible={isLevarTrocoModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Sucesso, iremos levar seu troco até você!</Text>
          <TouchableOpacity onPress={handleLevarTrocoModalClose}>
            <Text style={styles.modalCloseText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Modal para "Levar Maquininha" */}
      <Modal isVisible={isLevarMaquininhaModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Sucesso, iremos levar a maquininha até você!</Text>
          <TouchableOpacity onPress={handleLevarMaquininhaModalClose}>
            <Text style={styles.modalCloseText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'LeagueSpartan_700Bold',
    fontWeight: 'bold'
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#EF5350',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  prosseguirButton: {
    backgroundColor: '#EF5350',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  prosseguirButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    backgroundColor: '#EF5350',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white'

  },
  modalCloseText: {
    color: '#FFE082',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

