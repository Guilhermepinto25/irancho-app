import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AtividadesPageContainer from '~/containers/AtividadesPageContainer';

const Routes = createAppContainer(createSwitchNavigator({ AtividadesPageContainer }));

export default Routes;
