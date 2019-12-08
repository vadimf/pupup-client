import React, {RefObject, useEffect, useRef} from 'react';
import 'react-native-gesture-handler';
import Navigator from './src/navigations';
import {Provider} from 'react-redux';
import store from './src/services/store';
import NavigationService from './src/navigations/NavigationService';
import * as Sentry from '@sentry/react-native';
import {YellowBox} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-easy-toast';
import RNExitApp from 'react-native-exit-app';

YellowBox.ignoreWarnings(['Require cycle:', 'Warning: AsyncStorage']);

Sentry.init({
    dsn: 'https://8e3053681aa94fb0ae32d3a90238968f@sentry.io/1841567'
});

const App = () => {
    const toast: RefObject<Toast> = useRef(null);

    useEffect(() => {
        NetInfo.fetch().then(state => {
            if (toast.current && !state.isConnected) {
                toast.current.show('No internet connection found', 3000);
                setTimeout(() => RNExitApp.exitApp(), 3000);
            }
        });
    }, []);

    return (
        <Provider store={store}>
            <Navigator
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
            <Toast ref={toast} />
        </Provider>
    );
};

export default App;
