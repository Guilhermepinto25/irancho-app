import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet } from 'react-native'
import ManejoItem from './ManejoItem';

const propTypes = {
  manejos: PropTypes.array,
  onPressManejo: PropTypes.func,
  onPressSincronizarManejo: PropTypes.func
}

const defaultProps = {
  manejos: [],
  onPressManejo: () => { },
  onPressSincronizarManejo: () => { }
}

const ManejoList = ({ manejos, onPressManejo, onPressSincronizarManejo }) => {
  return (
    <FlatList
      data={manejos}
      renderItem={({ item, index }) => (
        <ManejoItem
          key={index}
          manejo={item}
          style={index % 2 != 0 ? styles.itemGray : styles.itemWhite}
          onPressSincronizar={onPressSincronizarManejo}
          onPressManejo={onPressManejo}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  itemGray: {
    backgroundColor: '#e7e7e7'
  },
  itemWhite: {
    backgroundColor: '#ffffff'
  }
})

ManejoList.propTypes = propTypes
ManejoList.defaultProps = defaultProps

export default ManejoList
