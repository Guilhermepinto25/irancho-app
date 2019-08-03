import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import ManejoItem from './ManejoItem';

const propTypes = {
  manejos: PropTypes.array,
  onPressSincronizarManejo: PropTypes.func
}

const defaultProps = {
  manejos: [],
  onPressSincronizarManejo: () => {}
}

const ManejoList = ({ manejos, onPressSincronizarManejo }) => {
  return (
    <FlatList
      data={manejos}
      renderItem={({ item, index }) => (
        <ManejoItem key={index} manejo={item} onPressSincronizar={onPressSincronizarManejo} />
      )}
    />
  )
}

ManejoList.propTypes = propTypes
ManejoList.defaultProps = defaultProps

export default ManejoList
