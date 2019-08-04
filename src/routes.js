import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import MainPageContainer from '~/containers/MainPageContainer'
import LoginPageContainer from '~/containers/LoginPageContainer'
import NewPage from '~/containers/newPage'
import LoadingPageContainer from '~/containers/LoadingPageContainer'
import BluetoothPageContainer from '~/containers/BluetoothPageContainer'
import AtividadesPageContainer from './containers/AtividadesPageContainer'

const Routes = createAppContainer(createSwitchNavigator({ 
    Loading: LoadingPageContainer,
    Main: MainPageContainer,
    Login: LoginPageContainer,
    NewPage: NewPage,
    Bluetooth: BluetoothPageContainer,
    Atividades: AtividadesPageContainer
  },
  {
    initialRouteName: 'Loading'
  })
);

export default Routes;
