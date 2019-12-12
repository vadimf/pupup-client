import React, {RefObject, useEffect, useRef} from 'react';
import 'react-native-gesture-handler';
import Navigator from './src/navigations';
import {Provider} from 'react-redux';
import store from './src/services/store';
import NavigationService from './src/services/NavigationService';
import * as Sentry from '@sentry/react-native';
import {YellowBox} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-easy-toast';
import RNExitApp from 'react-native-exit-app';
import ToastService from './src/services/ToastService';

YellowBox.ignoreWarnings(['Require cycle:', 'Warning: AsyncStorage', 'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

Sentry.init({
    dsn: 'https://8e3053681aa94fb0ae32d3a90238968f@sentry.io/1841567'
});

const App = () => {
    useEffect(() => {
        checkForConnection();
    }, []);
    
    const checkForConnection = () => {
        NetInfo.fetch().then(state => {
            if (!state.isConnected) {
                ToastService.show('No internet connection found');
                setTimeout(() => RNExitApp.exitApp(), 3000);
            }
        });
    };
    
    return (
        <Provider store={store}>
            <Navigator ref={NavigationService.setTopLevelNavigator}/>
            <Toast ref={ToastService.setTopLevelToast}/>
        </Provider>
    );
};

export default App;
