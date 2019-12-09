import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../modules/home/HomeScreen';
import ChatsScreen from '../modules/chats/ChatsScreen';
import ProfileScreen from '../modules/profile/ProfileScreen';

const TabNavigatorConfig = {
    initialRouteName: 'HomeScreen',
    header: null,
    headerMode: 'none'
};

const RouteConfigs = {
    HomeScreen,
    ChatsScreen,
    ProfileScreen
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
