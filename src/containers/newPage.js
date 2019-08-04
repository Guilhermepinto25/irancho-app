import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

export default function NewPage () {
  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() => {
    setCurrentUser(firebase.auth().authResult);
  })

  return (
    <View style={styles.container}>
      <Text> Hi {currentUser && currentUser.email}! </Text>
      <TouchableOpacity style={styles.button} onPress={() => firebase.auth().signOut()}>
          <Text style={styles.buttonText}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
}

NewPage.navigationOptions = {
  title: "NewPage",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
})
