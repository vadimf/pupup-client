import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, AppThunk} from '../../../services/store';
import * as API from '../../../services/APIGateway';

export interface InitialState {
    isFetchingConfig: boolean;
    config: SystemSettings | null;
}

const initialState: InitialState = {
    isFetchingConfig: false,
    config: null
};

const appConfig = createSlice({
    name: 'appConfig',
    initialState,
    reducers: {
        fetchConfigAttempt(state) {
            state.isFetchingConfig = true;
        },
        fetchConfigSuccess(state, action: PayloadAction<SystemSettings>) {
            state.isFetchingConfig = false;
            state.config = action.payload;
        },
        fetchConfigFailure(state) {
            state.isFetchingConfig = false;
        }
    }
});

export const {fetchConfigAttempt, fetchConfigSuccess, fetchConfigFailure} = appConfig.actions;

export default appConfig.reducer;

export const fetchConfig: AppThunk = () => async (dispatch: AppDispatch) => {
    dispatch(fetchConfigAttempt);
    try {
        const response = await API.fetchConfig();
        dispatch(fetchConfigSuccess(response.config!));
    } catch {
        dispatch(fetchConfigFailure());
    }
};
