import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import AtividadeItem from './AtividadeItem'
import { ScrollView } from 'react-native-gesture-handler'

const propTypes = {
  atividades: PropTypes.array,
  onPressAtividade: PropTypes.func
}

const defaultProps = {
  atividades: [],
  onPressAtividade: () => { }
}

const AtividadesPage = ({ atividades, onPressAtividade }) => (
  <ScrollView>
    <View style={styles.container}>
      {atividades && atividades.map((atividade) => (
        <AtividadeItem
          atividade={atividade}
          onPressAtividade={onPressAtividade}
        />
      ))}
    </View>
  </ScrollView>
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
