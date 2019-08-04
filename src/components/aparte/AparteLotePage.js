import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import AparteLote from '~/components/aparte/aparteLote'
import { ScrollView } from 'react-native-gesture-handler'

const propTypes = {
  atividades: PropTypes.array,
  onPressAtividade: PropTypes.func
}

const defaultProps = {
  atividades: [],
  onPressAtividade: () => { }
}

const AparteLotePage = ({ atividades, onPressAtividade, navigation }) => (
  <ScrollView>
    <View style={styles.container}>
      {atividades && atividades.map((atividade) => (
        <AparteLote
          atividade={atividade}
          onPressAtividade={onPressAtividade}
          navigation={navigation}
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

AparteLotePage.propTypes = propTypes
AparteLotePage.defaultProps = defaultProps

export default AparteLotePage
