import {createStackNavigator} from 'react-navigation-stack';
import ProfileScreen from './ProfileScreen';

const RouteConfigs = {
    ProfileScreen
};

const AuthNavigatorConfig = {
    initialRouteName: 'ProfileScreen',
    header: null,
    headerMode: 'none'
};

// @ts-ignore
const ProfileTabStack = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default ProfileTabStack;
