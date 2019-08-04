import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import MainPageContainer from '~/containers/MainPageContainer'
import LoginPageContainer from '~/containers/LoginPageContainer'
import NewPage from '~/containers/newPage'
import LoadingPageContainer from '~/containers/LoadingPageContainer'
import BluetoothPageContainer from '~/containers/BluetoothPageContainer'
import AtividadesPageContainer from './containers/AtividadesPageContainer'
import Pesagem from '~/containers/Atividades/Pesagem';
import Aparte from '~/containers/Atividades/Aparte';

const Routes = createAppContainer(createSwitchNavigator({ 
    Loading: LoadingPageContainer,
    Main: MainPageContainer,
    Login: LoginPageContainer,
    NewPage: NewPage,
    Bluetooth: BluetoothPageContainer,
    Atividades: AtividadesPageContainer,
    Pesagem: Pesagem,
    Aparte: Aparte,
  },
  {
    initialRouteName: 'Loading'
  })
);

export default Routes;
