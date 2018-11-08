import {createStackNavigator} from 'react-navigation';

import Home from '../pages/Home';
import ListContent from '../pages/ListContent';
import Details from '../pages/Details';

const Routes = createStackNavigator({Home, ListContent, Details});

export default Routes;