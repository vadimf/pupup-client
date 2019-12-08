import {createStackNavigator} from 'react-navigation-stack';
import OnboardingScreen from '../modules/auth/OnboardingScreen';
import SignUpScreen from '../modules/auth/SignUpScreen';
import ForgotPasswordScreen from '../modules/auth/ForgotPasswordScreen';
import TermsPage from '../modules/auth/TermsPage';
import PrivacyPolicyPage from '../modules/auth/PrivacyPolicyPage';

const AuthNavigatorConfig = {
    initialRouteName: 'OnboardingScreen',
    header: null,
    headerMode: 'none'
};

const RouteConfigs = {
    OnboardingScreen,
    SignUpScreen,
    SignInScreen: SignUpScreen,
    ForgotPasswordScreen,
    TermsPage,
    PrivacyPolicyPage
};

// @ts-ignore
const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
