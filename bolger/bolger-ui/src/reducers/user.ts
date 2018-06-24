import ActionTypes from '../actions/ActionTypes';
import { Action } from 'appProps';

export type State = {
    readonly isRequesting: false;
    readonly loginFailure: false;
    readonly form: {
        readonly username?: string,
        readonly password?: string,
        readonly rememberMe?: boolean
    },
    readonly auth: {
        readonly isAuthenticated?: boolean
    }
};

const savedUsername = 'Vinay Prajapati';

export const defaultState: State = {
    isRequesting: false,
    loginFailure: false,
    form: {
        username: savedUsername,
        rememberMe: !!savedUsername
    },
    auth: {}
};

export const user = (state: State = defaultState, { type, payload }: Action) => {

    switch (type) {

        case ActionTypes.USER_AUTH.LOGIN.EDIT:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...payload
                }
            };

        case ActionTypes.USER_AUTH.LOGIN.REQUEST:
            return {
                ...state,
                isRequesting: true
            };

        case ActionTypes.USER_AUTH.LOGIN.SUCCESS:
            return {
                ...state,
                isRequesting: false,
                auth: {
                    isAuthenticated: true
                }
            };

        case ActionTypes.USER_AUTH.EXPIRED_OR_ERROR:
            return {
                ...state,
                auth: {
                    isAuthenticated: false
                }
            };

        case ActionTypes.USER_AUTH.LOGIN.FAILURE:
            return {
                ...state,
                isRequesting: false,
                loginFailure: true
            };

        case ActionTypes.USER_AUTH.LOGIN.RESET:
            return {
                ...defaultState
            };

        default:
            return state;
    }
};