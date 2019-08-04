import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import RalewayText from '~/components/layout/RalewayText'

const propTypes = {
  atividade: PropTypes.object,
  onPressAtividade: PropTypes.func
}

const defaultProps = {
  atividade: {},
  onPressAtividade: () => { }
}

const AparteLote = ({ atividade, navigation }) => (
  <TouchableOpacity 
    style={[styles.container, { backgroundColor: atividade.backgroundColor }]}
    onPress={() => atividade.navigate(navigation)}
  >
    {/* <Image source={require('../../images/cow.png')} /> */}
    <RalewayText style={styles.label}>{atividade.label}</RalewayText>
  </TouchableOpacity >
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '50%',
    maxWidth: '50%',
    height: 150,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginBottom: 10,
    color: '#FFFFFF'
  },
  label: {
    fontSize: 18,
    color: '#FFFFFF'
  }
})

AparteLote.propTypes = propTypes
AparteLote.defaultProps = defaultProps

export default AparteLote
