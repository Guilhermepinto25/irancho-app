import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainPageContainer from '~/containers/MainPageContainer';

const Routes = createAppContainer(createSwitchNavigator({ MainPageContainer }));

export default Routes;
