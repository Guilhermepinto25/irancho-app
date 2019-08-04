import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginPageContainer from '~/containers/LoginPageContainer';
import NewPage from '~/containers/newPage'
import LoadingPageContainer from '~/containers/LoadingPageContainer';

const Routes = createAppContainer(createSwitchNavigator({ 
    Loading: LoadingPageContainer,
    Login: LoginPageContainer,
    NewPage: NewPage,
  },
  {
    initialRouteName: 'Loading'
  })
);

export default Routes;
