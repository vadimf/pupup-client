import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        translation: {
            facebookLogin: 'Connect with',
            emailSignUp: 'Sign up with your email',
            welcomeText: 'WELCOME TO',
            letYourDog: 'Let Your Dog Find Your Love',
            register: 'Register',
            logIn: 'Log in to your account',
            signUp: 'Sign up',
            signIn: 'Sign in',
            email: 'Email',
            enterEmail: 'Enter Email',
            password: 'Password',
            enterPassword: 'Enter Password',
            forgotPassword: 'Forgot Your Password',
            alreadyRegistered: 'Already have an account? click here',
            terms: 'Terms',
            privacyPolicy: 'Privacy Policy',
            restorePassword:
                'To restore your password, type your full email address and we will send you the link with further instructions',
            confirm: 'CONFIRM',
            passwordSent: 'We’ve sent you a password reset link to your email',
            waitForEmail: 'Please wait allow a few minutes for the email to arrive',
            emailOrPasswordIncorrect: 'Email or Password incorrect, please retry',
            settings: 'Settings',
            about: 'About',
            helpCenter: 'Help Center',
            termsOfService: 'Terms of Service',
            privacy: 'Privacy',
            account: 'Account',
            logout: 'Logout'
        }
    }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
