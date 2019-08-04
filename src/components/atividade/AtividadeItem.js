import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

const propTypes = {
  atividade: PropTypes.object,
  onPressAtividade: PropTypes.func
}

const defaultProps = {
  atividade: {},
  onPressAtividade: () => {}
}

const AtividadeItem = ({ atividade }) => (
  <View style={styles.container}>
    <Icon
      style={styles.icon}    
      name={atividade.icon}
      size={30} 
      color="#000000" 
    />
    <Text style={styles.label}>{atividade.label}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    width: 150,
    maxWidth: 150,
    height: 150,
    flexGrow: 1,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginBottom: 10
  },
  label: {
    fontSize: 18
  }
})

AtividadeItem.propTypes = propTypes
AtividadeItem.defaultProps = defaultProps

export default AtividadeItem
