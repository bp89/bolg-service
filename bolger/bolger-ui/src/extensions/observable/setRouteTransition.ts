import { Observable } from 'rxjs/Observable';
import { FluxStandardAction } from 'typesafe-actions/src/redux-types';

function setRouteTransition<T extends FluxStandardAction<string>>(this: Observable<T>,
                                                                  pathnameFunc: Function,
                                                                  queryStringFunc: Function = a => null) {
    return this.map((action: FluxStandardAction<string>) => {
        if (action.type.endsWith('.FAILURE') || action.type.endsWith('.RETRY')) {
            return action;
        }

        return ({
            ...action,
            meta: {
                ...action.meta,
                transition: () => ({
                    pathname: pathnameFunc(action),
                    search: queryStringFunc(action)
                })
            }
        });
    });
}

Observable.prototype.setRouteTransition = setRouteTransition;

declare module 'rxjs/Observable' {
    interface Observable<T> { // tslint:disable-line
        setRouteTransition: typeof setRouteTransition;
    }
}