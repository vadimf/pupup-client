import {createStackNavigator} from 'react-navigation-stack';
import ChatsScreen from "./ChatsScreen";

const RouteConfigs = {
    ChatsScreen,
};

const AuthNavigatorConfig = {
    initialRouteName: 'ChatsScreen',
    header: null,
    headerMode: 'none'
};

// @ts-ignore
const ChatsTabStack = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default ChatsTabStack;
