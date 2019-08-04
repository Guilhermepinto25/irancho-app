import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import ManejoList from './ManejoList'
import { Container } from 'native-base';

const propTypes = {
  manejos: PropTypes.array,
  onPressSincronizarManejo: PropTypes.func
}

const defaultProps = {
  manejos: [],
  onPressSincronizarManejo: () => { }
}

const MainPage = ({ manejos, onPressSincronizarManejo }) => {
  return (
    <Container>
      <ManejoList
        manejos={manejos}
        onPressSincronizarManejo={onPressSincronizarManejo}
      />
    </Container>
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
