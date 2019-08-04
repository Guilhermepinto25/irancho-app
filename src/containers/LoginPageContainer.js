import React from 'react';
import firebase from 'react-native-firebase'
import LoginPage from '~/components/login/LoginPage'
import { ToastAndroid } from 'react-native';

const mapFirebaseCodes = {
  'auth/invalid-email' : 'Email inválido',
  'auth/user-disabled' : 'Usuário expirou',
  'auth/user-not-found': 'Usuário não encontrado',
  'auth/wrong-password': 'Senha inválida'
}

export default function LoginPageContainer({ navigation }) {

  login = async (email, password) => {

    console.tron.log(email, password);
  
    try { 
      if(email && password) {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        navigation.navigate('Main')
        console.tron.log(user)
      }
    } catch (err) {
      console.tron.log(err.code)
      ToastAndroid.showWithGravity(mapFirebaseCodes[err.code], ToastAndroid.SHORT, ToastAndroid.TOP)
    }
  }

  return (
    <LoginPage onPressLogin={this.login} />
  );
}

LoginPageContainer.navigationOptions = {
  title: 'Login',
}
