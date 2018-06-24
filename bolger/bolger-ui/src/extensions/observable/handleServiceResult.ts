import { Observable } from 'rxjs/Observable';
import { ServiceActions } from '../../actions/ActionTypes';

/**
 * Format the action and payload for a successful service call
 * @param serviceActions
 */
export function handleServiceResult<T extends any>(this: Observable<T>,  // tslint:disable-line:no-any
                                                   serviceActions: ServiceActions) {
    return this
        .map(msg => {
            if (msg && msg.error) {
                return msg;
            } else {
                return { type: serviceActions.SUCCESS, payload: msg };
            }
        });
}

Observable.prototype.handleServiceResult = handleServiceResult;

declare module 'rxjs/Observable' {
    interface Observable<T> { // tslint:disable-line
        handleServiceResult: typeof handleServiceResult;
    }
}