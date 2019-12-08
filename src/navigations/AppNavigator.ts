import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../modules/home/HomeScreen';

const TabNavigatorConfig = {
  initialRouteName: 'HomeScreen',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  HomeScreen,
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
