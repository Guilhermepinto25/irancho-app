import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginPageContainer from '~/containers/LoginPageContainer';
import NewPage from '~/containers/newPage'

const Routes = createAppContainer(createSwitchNavigator(
  { 
    Login: LoginPageContainer,
    NewPage: NewPage,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#8da6',
      },
      statusBar: {
        backgroundColor: '#8da6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
  )
);

export default Routes;
