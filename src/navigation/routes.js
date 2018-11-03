import {createStackNavigator} from 'react-navigation';

import Home from '../pages/Home';
import ListContent from '../pages/ListContent';

const Routes = createStackNavigator({Home, ListContent});

export default Routes;