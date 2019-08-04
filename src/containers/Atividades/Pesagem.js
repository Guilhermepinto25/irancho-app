import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Pesagem() {
  const [ isFocused, setFocused ] = useState(false)
  const [ peso, setPeso] = useState(false)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.labelPeso}>Digite o Peso</Text>
        <TextInput
        label='Peso'
        style={styles.inputPesagem}
        selectionColor={'#8da614'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={peso}
        onChangeText={setPeso}
        mode={'flat'}
        keyboardType='numeric'
        maxLength={8}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputPesagem: {
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
  }
})

export default Pesagem;
