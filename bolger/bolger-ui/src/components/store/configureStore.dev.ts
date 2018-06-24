import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import handleTransitions from 'redux-history-transitions';
import { createLogger, ReduxLoggerOptions } from 'redux-logger';
import { History } from 'history';

import rootEpic from '../../actions';
import rootReducer from '../../reducers';
import { Action } from 'appProps';

export default (history: History, preloadedState: Object) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const logger = createLogger(<ReduxLoggerOptions> {
        actionTransformer: (action: Action) => ({ ...action, type: action.type.toString() })
    });

    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(createEpicMiddleware(rootEpic)),
            applyMiddleware(logger as Middleware),
            applyMiddleware(routerMiddleware(history)),
            handleTransitions(history)
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../../reducers', () => {
            const nextRootReducer = require('../../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};