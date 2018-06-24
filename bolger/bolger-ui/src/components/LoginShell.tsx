import React  from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';

import { RootState } from '../reducers';
import { State as LoginShellState } from '../reducers/loginShell';
import { StyledProps } from 'appProps';
import Login from './login/Login';
import Register from './register/Register';
import styles from './LoginShell.styles';
import { routes } from '../util/constants';

interface Props extends StyledProps {
    loginShell: LoginShellState;
}

export class LoginShell extends React.Component<Props> {

    handleChange = (e, value) => {
        this.props.history.push(value);
    }

    render() {
        const { classes, history } = this.props;

        const tabsClassOverrides = {
            root: classes.tabsRoot,
            flexContainer: classes.tabsFlexContainer,
            indicator: classes.tabsIndicator
        };

        const tabClassOverrides = {
            root: classes.tabRoot,
            label: classes.tabLabel,
            labelContainer: classes.tabLabelContainer,
            wrapper: classes.tabWrapper
        };

        const validTabRoutes = [
            routes.register,
            routes.login
        ];

        return (
            <div className={classes.outerContainer}>

                <div className={classes.main}>
                    <div className={classes.header}>
                        <img src={routes.home + 'assets/images/auro_logo.png'} alt="Auro" />
                    </div>

                    <div className={classes.container}>
                        <AppBar position="static" className={classes.bar}>
                            <Tabs
                                value={validTabRoutes.includes(history.location.pathname)
                                    ?
                                    history.location.pathname
                                    :
                                    routes.login
                                }
                                onChange={this.handleChange}
                                classes={tabsClassOverrides}
                                indicatorColor="primary"
                            >
                                <Tab
                                    label="Register"
                                    value={routes.register}
                                    classes={tabClassOverrides}
                                    icon={<i className="material-icons">person_add</i>}
                                />
                                <Tab
                                    label="Login"
                                    value={routes.login}
                                    classes={tabClassOverrides}
                                    icon={<i className="material-icons">account_circle</i>}
                                />
                            </Tabs>
                        </AppBar>

                        <div className={classes.tabContentContainer}>
                            <Switch>
                                <Route
                                    path={routes.register}
                                    component={Register}
                                />
                                <Route
                                    path={routes.login}
                                    component={Login}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(createStructuredSelector({
    loginShell: (state: RootState) => state.loginShell,
}))(withStyles(styles)(LoginShell));
