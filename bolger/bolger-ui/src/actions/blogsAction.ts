import '../rxjs-imports';
import '../extensions/observable';

import { ActionsObservable } from 'redux-observable';
import ActionTypes from './ActionTypes';
import { Action } from 'appProps';
import { restGet } from '../util/Messaging';
import { endPoints } from '../util/constants';

export const allBlogs = (action$: ActionsObservable<Action>) =>
    action$.ofType(ActionTypes.BLOGS.REQUEST)
        .switchMap(() => restGet(endPoints.BLOGS.LIST, {}))
        .handleServiceResult(ActionTypes.BLOGS);