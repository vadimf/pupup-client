import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, AppThunk} from '../../../services/store';
import * as API from '../../../services/APIGateway';
import NavigationService from '../../../services/NavigationService';
import {removeJwtToken, setJwtToken} from '../../../services/APIGateway';
import {fetchConfig} from './appConfigSlice';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import SplashScreen from 'react-native-splash-screen';
import ToastService from '../../../services/ToastService';

export interface InitialState {
    isRestoringSession: boolean;
    isSigningUp: boolean;
    user: User | null;
    isSendingForgotPasswordEmail: boolean;
    forgotPasswordEmailSentTo: string | null;
    isLoggingInWithFacebook: boolean;
}

const initialState: InitialState = {
    isRestoringSession: true,
    isSigningUp: false,
    user: null,
    isSendingForgotPasswordEmail: false,
    forgotPasswordEmailSentTo: null,
    isLoggingInWithFacebook: false
};

const userSession = createSlice({
    name: 'userSession',
    initialState,
    reducers: {
        restoreSessionSuccess(state, action: PayloadAction<object>) {
            state.user = action.payload;
            state.isRestoringSession = false;
        },
        restoreSessionFailed(state) {
            state.isRestoringSession = false;
        },
        signUpAttempt(state) {
            state.isSigningUp = true;
        },
        signUpSuccess(state, action: PayloadAction<object>) {
            state.isSigningUp = false;
            state.user = action.payload;
        },
        signUpFailed(state) {
            state.isSigningUp = false;
        },
        signInAttempt(state) {
            state.isSigningUp = true;
        },
        signInSuccess(state, action: PayloadAction<User>) {
            state.isSigningUp = false;
            state.user = action.payload;
        },
        signInFailed(state) {
            state.isSigningUp = false;
        },
        facebookLoginAttempt(state) {
            state.isLoggingInWithFacebook = true;
        },
        facebookLoginSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isLoggingInWithFacebook = false;
        },
        facebookLoginFailure(state) {
            state.isLoggingInWithFacebook = false;
        },
        sendForgotPasswordEmailAttempt(state) {
            state.isSendingForgotPasswordEmail = true;
        },
        sendForgotPasswordEmailSuccess(state, action: PayloadAction<string>) {
            state.isSendingForgotPasswordEmail = false;
            state.forgotPasswordEmailSentTo = action.payload;
        },
        sendForgotPasswordEmailFailure(state) {
            state.isSendingForgotPasswordEmail = false;
        },
        resetForgotPasswordScreen(state) {
            state.forgotPasswordEmailSentTo = null;
        },
        logoutAttempt(state) {
        },
        logoutSuccess(state) {
        },
        logoutFailure(state) {
        }
    }
});

export const {
    restoreSessionSuccess,
    restoreSessionFailed,
    signUpAttempt,
    signUpSuccess,
    signUpFailed,
    signInAttempt,
    signInSuccess,
    signInFailed,
    facebookLoginAttempt,
    facebookLoginSuccess,
    facebookLoginFailure,
    sendForgotPasswordEmailAttempt,
    sendForgotPasswordEmailSuccess,
    sendForgotPasswordEmailFailure,
    resetForgotPasswordScreen,
    logoutAttempt,
    logoutSuccess,
    logoutFailure
} = userSession.actions;

export default userSession.reducer;

export const tryRestoreSession: AppThunk = () => async (dispatch: AppDispatch) => {
    try {
        // await dispatch(fetchConfig());
        const response = await API.fetchUser();
        dispatch(restoreSessionSuccess(response.user!));
        NavigationService.navigate('HomeScreen');
    } catch {
        dispatch(restoreSessionFailed());
    } finally {
        SplashScreen.hide();
    }
};

export const signUp: AppThunk = (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(signUpAttempt());
    try {
        const response = await API.signUp(email, password);
        await setJwtToken(response.accessToken);
        dispatch(signUpSuccess(response.user));
        NavigationService.navigate('HomeScreen');
    } catch {
        ToastService.show('Email already exists, please try again');
        dispatch(signUpFailed());
    }
};

export const signIn: AppThunk = (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(signInAttempt());
    try {
        const response = await API.signIn(email, password);
        await setJwtToken(response.accessToken);
        dispatch(signInSuccess(response.user));
        NavigationService.navigate('HomeScreen');
    } catch {
        ToastService.show('Bad credentials, please try again');
        dispatch(signInFailed());
    }
};

export const sendForgotPasswordEmail: AppThunk = (email: string) => async (dispatch: AppDispatch) => {
    dispatch(sendForgotPasswordEmailAttempt());
    try {
        await API.sendForgotPasswordEmail(email);
        dispatch(sendForgotPasswordEmailSuccess(email));
    } catch {
        ToastService.show("Email doesn't exist, please try again");
        dispatch(sendForgotPasswordEmailFailure());
    }
};

export const facebookLogin: AppThunk = () => async (dispatch: AppDispatch) => {
    dispatch(facebookLoginAttempt());
    try {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            console.log('Login cancelled');
        } else {
            const response = await AccessToken.getCurrentAccessToken();
            if (response) {
                const serverResponse = await API.facebookLogin(response.accessToken);
                await setJwtToken(serverResponse.accessToken);
                dispatch(facebookLoginSuccess(serverResponse.user));
                NavigationService.navigate('HomeScreen');
            }
        }
    } catch {
        dispatch(facebookLoginFailure());
    }
};

export const logout: AppThunk = () => async (dispatch: AppDispatch) => {
    dispatch(logoutAttempt());
    try {
        // await API.logout();
        await removeJwtToken();
        dispatch(logoutSuccess());
        NavigationService.navigate("OnboardingScreen")
    } catch {
        dispatch(logoutFailure());
    }
};
