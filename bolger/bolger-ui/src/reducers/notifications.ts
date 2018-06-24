import { Action } from 'appProps';
import ActionTypes       from '../actions/ActionTypes';
import { NotificationMeta } from '../util/Notifications';

export type State = {
    activeNotification?: NotificationMeta
};

export const defaultState: State = {
    activeNotification: undefined
};

export const notifications = (state: State = defaultState, { type, payload }: Action) => {

    switch (type) {

        case ActionTypes.NOTIFY.TOAST:
            return {
                ...state,
                activeNotification: payload
            };

        case ActionTypes.NOTIFY.CLEAR:
            return defaultState;

        default:
            return state;
    }
};