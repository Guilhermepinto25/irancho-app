import React from 'react'
import { StatusBar } from 'react-native'

import '~/config/ReactotronConfig'

import { Provider } from 'react-redux'
import store from './store'

import Routes from '~/routes'

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Routes />
    </Provider>
  )
}

export default App;
