interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}

interface NodeModule {
    hot: any; // tslint:disable-line:no-any
}

declare module 'appProps' {
    import { Dispatch } from 'react-redux';
    import { History } from 'history';
    import { PayloadAction as PAction } from 'typesafe-actions';

    interface StyledProps {
        dispatch: Dispatch<object>;
        classes: any; // tslint:disable-line:no-any
        history: History;
        match: {
            params: any; // tslint:disable-line:no-any
        };
    }

    interface Action extends PAction<string, any> { // tslint:disable-line:no-any

    }

    interface PayloadAction<P> extends PAction<string, P> {

    }
}

declare module 'redux-history-transitions';