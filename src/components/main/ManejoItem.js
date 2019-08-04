import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Moment from 'moment'
import RalewayText from '~/components/layout/RalewayText'

const propTypes = {
  manejo: PropTypes.object,
  onPressManejo: PropTypes.func,
  onPressSincronizar: PropTypes.func,
  style: PropTypes.any
}

const defaultProps = {
  manejo: {},
  onPressManejo: () => { },
  onPressSincronizar: () => { },
  style: []
}

const ManejoItem = ({ manejo, onPressManejo, onPressSincronizar, style }) => {
  const { idManejo, nome, dtCriacao } = manejo.documento
  const { quantidadeProcessada } = manejo.documentoExecucao

  const getFormattedDate = (dt) => dt ? Moment(dt).format('d/MM/YYYY') : ''

  return (
    <TouchableOpacity  style={[styles.container].concat(style)} onPress={() => onPressManejo(idManejo)}>
      <View style={[styles.wrapper, styles.spaceBottom]}>
        <RalewayText style={[styles.item]}>{nome}</RalewayText>
        <Icon
          name="sync"
          size={15}
          color="#000000"
          onPress={() => onPressSincronizar(idManejo)}
        />
      </View>
      <View style={styles.wrapper}>
        <RalewayText style={styles.item}>{quantidadeProcessada}</RalewayText>
        <RalewayText style={[styles.item, styles.right]}>{getFormattedDate(dtCriacao)}</RalewayText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
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
