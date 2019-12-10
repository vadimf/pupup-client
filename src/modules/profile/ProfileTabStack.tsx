import {createStackNavigator} from 'react-navigation-stack';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from "./SettingsScreen";

const RouteConfigs = {
    ProfileScreen,
    SettingsScreen
};

const AuthNavigatorConfig = {
    initialRouteName: 'ProfileScreen',
    header: null,
    headerMode: 'none'
};

// @ts-ignore
const ProfileTabStack = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default ProfileTabStack;
