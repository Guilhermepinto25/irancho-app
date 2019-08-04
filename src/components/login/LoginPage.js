import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  login: PropTypes.func
};

const defaultProps = {
  onPressLogin: () => { }
};

export default function LoginPage({ onPressLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../../images/LoginPage-background.jpeg')} style={styles.image} />
      <Image source={require('../../images/LoginPage-logo.png')} style={styles.logo}/>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={() => onPressLogin(email, password)}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000'
  },

  logo: {
    position: 'absolute',
    resizeMode: 'center',
    opacity: 1,
    top: 45,
    width: 200,
    height: 200
  },

  image: {
    opacity: 0.9,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  input: {
    height: 45,
    backgroundColor: '#FFF',
    opacity: 0.95,
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },

  button: {
    height: 45,
    backgroundColor: '#8da614',
    opacity: 0.95,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18
  }
})

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;
