import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginPageContainer from '~/containers/LoginPageContainer';

const Routes = createAppContainer(createSwitchNavigator({ 
    Login: LoginPageContainer,
  })
);

export default Routes;
