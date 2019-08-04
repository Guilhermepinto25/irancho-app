import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View } from 'react-native'
import Moment from 'moment'

const propTypes = {
  manejo: PropTypes.object,
  onPressSincronizar: PropTypes.func
}

const defaultProps = {
  manejo: {},
  onPressSincronizar: () => { }
}

const ManejoItem = ({ manejo, onPressSincronizar }) => {
  const { idManejo, nome, dtCriacao } = manejo.documento
  const { quantidadeProcessada } = manejo.documentoExecucao

  const getFormattedDate = (dt) => dt ? Moment(dt).format('d/MM/YYYY') : ''

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, styles.spaceBottom]}>
        <Text style={[styles.item]}>{nome}</Text>
        <Icon
          name="sync"
          size={15}
          color="#000000"
          onPress={() => onPressSincronizar(idManejo)}
        />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.item}>{quantidadeProcessada}</Text>
        <Text style={[styles.item, styles.right]}>{getFormattedDate(dtCriacao)}</Text>
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
