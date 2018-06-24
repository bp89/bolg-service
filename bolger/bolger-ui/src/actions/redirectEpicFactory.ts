import { ActionsObservable } from 'redux-observable';

import ActionTypes from './ActionTypes';
import { routes } from '../util/constants';
import { Action } from 'appProps';
import { Observable } from 'rxjs/Observable';

const defaultRedirectCountdown = 5;

const navigatingAway = (action$: ActionsObservable<Action>, route) => action$
    .ofType(ActionTypes.LOCATION_CHANGE)
    .filter(action => action.payload.pathname !== route);

export const makeCountdownEpic = (actionType, baseAction, route) =>
    (action$: ActionsObservable<Action>) => action$
    .ofType(actionType)
    .switchMap(() => Observable.timer(0, 1000)
        .map(i => ({
            type: baseAction.COUNTDOWN,
            payload: {
                countdown: defaultRedirectCountdown - i
            }
        }))
        .takeWhile(({payload}) => payload.countdown >= 0)
        .takeUntil(navigatingAway(action$, route))
    );

export const makeRedirectEpic = (actionType) =>
    (action$: ActionsObservable<Action>) => action$
        .ofType(actionType.COUNTDOWN)
        .filter(({payload}) => payload.countdown <= 0)
        .map(() => ({
            type: actionType.REDIRECT
        }))
        .setRouteTransition(() => routes.login);