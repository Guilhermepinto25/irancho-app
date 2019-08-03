import React, {useState} from 'react';
import firebase from 'react-native-firebase'
import LoginPage from '~/components/login/LoginPage'
import { Text, View, StyleSheet, ToastAndroid } from 'react-native';


const mapFirebaseCodes = {
  'auth/invalid-email' : 'Email inválido',
  'auth/user-disabled' : 'Usuário expirou',
  'auth/user-not-found': 'Usuário não encontrado',
  'auth/wrong-password': 'Senha inválida'
}

export default function LoginPageContainer() {
  login = async (email, password) => {

    console.tron.log(email, password);

    try {
      if(email && password) {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.tron.log(user)
      }
    } catch (err) {
      console.tron.log(err.code)
      ToastAndroid.showWithGravity(mapFirebaseCodes[err.code], ToastAndroid.SHORT, ToastAndroid.TOP)
    }
  }

  return (
    <View style={styles.container}>
      <LoginPage login={this.login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  }
})