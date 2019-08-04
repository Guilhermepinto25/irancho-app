import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BluetoothPageContainer from '~/containers/BluetoothPageContainer';

const Routes = createAppContainer(createSwitchNavigator({ BluetoothPageContainer }));

export default Routes;
