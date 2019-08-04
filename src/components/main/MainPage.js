import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import ManejoList from './ManejoList'
import { Container } from 'native-base';

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

const MainPage = ({ manejos, onPressManejo, onPressSincronizarManejo }) => {
  return (
    <Container>
      <ManejoList
        manejos={manejos}
        onPressManejo={onPressManejo}
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
