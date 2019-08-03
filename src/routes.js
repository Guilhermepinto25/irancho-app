import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginPageContainer from '~/containers/LoginPageContainer';

const Routes = createAppContainer(createSwitchNavigator({ LoginPageContainer }));

export default Routes;
