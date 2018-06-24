import { restGet } from '../util/Messaging';
import { ActionsObservable } from 'redux-observable';
import ActionTypes from './ActionTypes';
import { endPoints } from '../util/constants';
import { Action } from 'appProps';

export const login = (action$: ActionsObservable<Action>) =>
    action$.ofType(ActionTypes.USER_AUTH.LOGIN.REQUEST)
        .switchMap(() => restGet(endPoints.AUTH.LOGIN, {}))
        .handleServiceResult(ActionTypes.USER_AUTH.LOGIN);