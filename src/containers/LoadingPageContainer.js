import React, { useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase'
import LoadingPage from '~/components/loading/LoadingPage'

export default function LoadingPageContainer({ navigation }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.tron.log(user)
      navigation.navigate(user ? 'Main' : 'Login')
    })
  })

  return (
    <View style={styles.container}>
      <LoadingPage />
    </View>
  )
}

LoadingPageContainer.navigationOptions = {
  title: 'Loading'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})