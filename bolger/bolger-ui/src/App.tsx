import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { History } from 'history';
import { withStyles } from 'material-ui/styles';

import Shell from './components/Shell';
import { globalContainer } from './App.styles';
import { StyledProps } from 'appProps';
import SecureRoute from './components/shared/SecureRoute';
import { routes } from './util/constants';
import BlogShell from './components/BlogShell';
import { LoginShell } from "./components/LoginShell";

const styles = () => ({
    ...globalContainer
});

interface Props extends StyledProps {
    store: any; // tslint:disable-line:no-any
    history: History;
}

export class App extends React.Component<Props> {

    render() {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route
                            path={routes.blogs}
                            component={BlogShell}
                        />
                        <Route
                            path={routes.login}
                            component={LoginShell}
                        />
                        <SecureRoute
                            path={routes.home}
                            component={Shell}
                        />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default withStyles(styles)<Props>(App);