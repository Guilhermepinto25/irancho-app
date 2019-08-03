import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import ManejoList from './ManejoList'

const propTypes = {
  manejos: PropTypes.array,
  onPressSincronizarManejo: PropTypes.func
}

const defaultProps = {
  manejos: [],
  onPressSincronizarManejo: () => {}
}

const MainPage = ({ manejos, onPressSincronizarManejo }) => {
  return (
    <View style={styles.container}>
      <ManejoList manejos={manejos} onPressSincronizarManejo={onPressSincronizarManejo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

MainPage.propTypes = propTypes;
MainPage.defaultProps = defaultProps;

export default MainPage;
