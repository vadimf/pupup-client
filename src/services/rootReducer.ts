import userSession, {InitialState as userSessionState} from '../modules/auth/redux/userSessionSlice';
import appConfig, {InitialState as appConfigState} from '../modules/auth/redux/appConfigSlice';

const rootReducer = {
    appConfig,
    userSession
};

export interface RootState {
    appConfig: appConfigState;
    userSession: userSessionState;
}

export default rootReducer;
