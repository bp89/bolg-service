import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import handleTransitions from 'redux-history-transitions';
import { createEpicMiddleware } from 'redux-observable';
import { History } from 'history';

import rootEpic from '../../actions';
import rootReducer from '../../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (browserHistory: History, preloadedState: Object) => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
        applyMiddleware(createEpicMiddleware(rootEpic)),
        applyMiddleware(routerMiddleware(browserHistory)),
        handleTransitions(browserHistory)
    )
);

export default configureStore;
