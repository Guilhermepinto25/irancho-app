import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import AtividadeItem from './AtividadeItem'

const propTypes = {
  atividades: PropTypes.array,
  onPressAtividade: PropTypes.func
}

const defaultProps = {
  atividades: [],
  onPressAtividade: () => {}
}

const AtividadesPage = ({ atividades, onPressAtividade }) => (
  <View style={styles.container}>
    {atividades && atividades.map((atividade) => (
      <AtividadeItem atividade={atividade} />
    ))}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

AtividadesPage.propTypes = propTypes
AtividadesPage.defaultProps = defaultProps

export default AtividadesPage
