import { Action } from 'appProps';
import ActionTypes from '../actions/ActionTypes';

export type State = {
    readonly form: {
        readonly firstName?: string,
        readonly lastName?: string,
        readonly phone?: string,
        readonly isBloombergChat?: boolean,
        readonly isSymphony?: boolean,
        readonly symphonyUsername?: string,
        readonly emailId?: string
    }
};

export const defaultState: State = {
    form: {}
};

export const userAccountSettings = (state: State = defaultState, { type, payload }: Action) => {
    switch (type) {
        case ActionTypes.USER_ACCOUNT.UPDATE.EDIT:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...payload
                }
            };

        default:
            return state;
    }
};