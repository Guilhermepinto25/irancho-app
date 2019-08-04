import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import AnimalService from '~/services/AnimalService'
import withSideBar from '~/components/withSideBar';
import RalewayText from '~/components/layout/RalewayText'
import Icon from 'react-native-vector-icons/FontAwesome5';

const IdentificacaoContainer = ({ navigation }) => {
  const [isFocused, setFocused] = useState(false)
  const [idAnimal, setIdAnimal] = useState('')
  const animalService = new AnimalService();

  const findAnimalAndGoToAtividades = () => {
    if (idAnimal) {
      animalService.findByid(idAnimal)
        .then(() => navigation.navigate('Atividades'))
        .catch(() => ToastAndroid.showWithGravity("Animal não encontrado.", ToastAndroid.SHORT, ToastAndroid.TOP))
    }
  }

  const goToConfiguracaoBluetooth = () => 
    navigation.navigate('Bluetooth')

  return (
    <>
      <View style={styles.container}>
        <RalewayText style={styles.labelPeso}>Digite o Id do Animal</RalewayText>
        <TextInput
          label='Id do Animal'
          style={styles.inputId}
          selectionColor={'#8da614'}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={idAnimal}
          onChangeText={setIdAnimal}
          mode={'flat'}
          keyboardType='numeric'
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={findAnimalAndGoToAtividades}>
        <RalewayText style={styles.buttonText}>Continuar</RalewayText>
      </TouchableOpacity>
      <Icon
          onPress={goToConfiguracaoBluetooth}
          name="bluetooth"
          size={40}
          color="#8da614"
          style={styles.bluetooth}
        />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputId: {
    color: '#62730E',
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    height: '20%',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8da614',
    marginBottom: 10
  },
  button: {
    height: 45,
    backgroundColor: '#8da614',
    opacity: 0.95,
    alignSelf: 'center',
    width: '50%',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  labelPeso: {
    fontSize: 50,
    color: '#62730E',
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18
  },
  bluetooth: {
    position: 'absolute',
    right: 10,
    bottom: 20
  }
})

export default withSideBar(IdentificacaoContainer);
