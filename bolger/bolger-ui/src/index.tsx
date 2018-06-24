import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import preset from 'jss-preset-default';
import { createGenerateClassName, MuiThemeProvider } from 'material-ui/styles';
import { AppContainer } from 'react-hot-loader';

import { store } from './components/store/configureStore';
import App from './App';
import { theme } from './App.styles';

const history = createHistory();
const appStore = store(history);

// Configure JSS
const jss = create({ plugins: preset().plugins });
const generateClassName = createGenerateClassName();

const render = (Component: React.ReactType) => {
    ReactDOM.render(
        <AppContainer>
            <JssProvider
                jss={jss}
                generateClassName={generateClassName}
            >
                <MuiThemeProvider theme={theme}>
                    <Component
                        store={appStore}
                        history={history}
                    />
                </MuiThemeProvider>
            </JssProvider>
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App.tsx', () => {
        const NextRoot = require('./App.tsx').default;
        render(NextRoot);
    });
}