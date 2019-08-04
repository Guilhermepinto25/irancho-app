import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import RalewayText from '~/components/layout/RalewayText'

export default function LoadingPage() {
  return (
    <View style={styles.container}>
      <RalewayText>Loading</RalewayText>
      <ActivityIndicator size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})