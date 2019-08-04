import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'native-base'

const RalewayText = ({ children, style, ...props }) =>
  <Text style={[styles.raleway].concat(style)} {...props}>{children}</Text>

const styles = StyleSheet.create({
  raleway: {
    fontFamily: 'Raleway-Bold'
  }
})

export default RalewayText