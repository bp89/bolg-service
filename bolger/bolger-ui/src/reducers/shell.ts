import { Action } from 'appProps';
import ActionTypes from '../actions/ActionTypes';
import { getUserName } from '../util/CommonUtils';

export type State = {
    readonly userAccount: {
        readonly user?: string
    }
};

export const defaultState: State = {
    userAccount: {}
};

export const shell = (state: State = defaultState, { type, payload }: Action) => {

    switch (type) {
        case ActionTypes.USER_AUTH.LOGIN.SUCCESS:
        case ActionTypes.USER_ACCOUNT.UPDATE.SUCCESS:
        case ActionTypes.USER_ACCOUNT.INFO.SUCCESS:
            return {
                ...state,
                userAccount: {
                    user: getUserName(payload.firstName, payload.lastName, payload.emailId),
                    ...payload
                }
            };

        default:
            return state;
    }
};