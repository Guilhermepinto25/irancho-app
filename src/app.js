import React from 'react'
import { StatusBar } from 'react-native'

import '~/config/ReactotronConfig'

import { Provider } from 'react-redux'
import store from './store'

import Routes from '~/routes'
import SideBar from '~/components/layout/SideBar'

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#8da614" barStyle="light-content" />
      <SideBar>
        <Routes />
      </SideBar>
    </Provider>
  )
}

export default App;
