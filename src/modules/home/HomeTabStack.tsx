import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

const RouteConfigs = {
    HomeScreen
};

const AuthNavigatorConfig = {
    initialRouteName: 'HomeScreen',
    header: null,
    headerMode: 'none'
};

// @ts-ignore
const HomeTabStack = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default HomeTabStack;
