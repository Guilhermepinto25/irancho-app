import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View } from 'react-native'

const propTypes = {
  manejo: PropTypes.object,
  onPressSincronizar: PropTypes.func
}

const defaultProps = {
  manejo: {},
  onPressSincronizar: () => {}
}

const ManejoItem = ({ manejo, onPressSincronizar }) => {
  console.tron.log(manejo);
  const {idManejo, nome, dtCriacao} = manejo.documento;
  const {quantidadeProcessada} = manejo.documentoExecucao;

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, styles.spaceBottom]}>
        <Text style={[styles.item]}>{nome}</Text>
        <Icon name="sync" size={15} color="#000000" onPress={() => onPressSincronizar(idManejo)} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.item}>{quantidadeProcessada}</Text>
        <Text style={[styles.item, styles.right]}>{dtCriacao}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    margin: 5
  },
  wrapper: {
    flexDirection: 'row'
  },
  spaceBottom: {
    marginBottom: 20
  },
  item: {
    flex: 1,
    marginBottom: 0,
  },
  right: {
    textAlign: 'right'
  }
})

ManejoItem.propTypes = propTypes
ManejoItem.defaultProps = defaultProps

export default ManejoItem
