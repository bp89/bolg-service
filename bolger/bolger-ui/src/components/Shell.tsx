import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { omit } from 'lodash';

import { RootState } from '../reducers';
import { State as ShellState } from '../reducers/shell';
import { StyledProps } from 'appProps';
import styles from './Shell.styles';
import Snackbar from 'material-ui/Snackbar';
import { NotificationMeta } from '../util/Notifications';
import ActionTypes from '../actions/ActionTypes';
import MenuItem from 'material-ui/Menu/MenuItem';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import SettingsShell from './settings/SettingsShell';
import { routes } from '../util/constants';
import Dashboard from './dashboard/Dashboard';

interface Props extends StyledProps {
    shell: ShellState;
    notification: NotificationMeta;
}

export class Shell extends React.Component<Props> {

    state = {
        isDrawerOpen: false,
        userMenuAnchorEl: undefined
    };

    onDrawerToggle = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        });
    }

    hideSnackbar = () => {
        setTimeout(() => this.props.dispatch({ type: ActionTypes.NOTIFY.CLEAR }), 800);
    }

    userLogout = () => {
        this.props.dispatch({
            type: ActionTypes.USER.LOGOUT.REQUEST
        });
    }

    onUserMenuButtonClick = e => {
        this.setState({
            userMenuAnchorEl: e.currentTarget
        });
    }

    closeUserMenu = () => {
        this.setState({ userMenuAnchorEl: undefined });
    }

    onSettingsClick = () => {
        this.setState({ userMenuAnchorEl: undefined });
        this.props.history.push(routes.settings);
    }

    componentDidMount() {
        this.props.dispatch({
            type: ActionTypes.USER_ACCOUNT.INFO.REQUEST
        });
    }

    render() {
        const { classes, notification, shell } = this.props;
        const { userMenuAnchorEl } = this.state;

        const drawerClassOverrides = {
            paper: classes.drawer
        };

        const iconClassOverrides = {
            root: classes.iconRoot
        };

        const listClassOverrides = {
            root: classes.listRoot
        };

        const notificationProps = omit(notification, 'actionType');

        return (
            <div className={classes.container}>

                <Drawer
                    open={this.state.isDrawerOpen}
                    onClose={this.onDrawerToggle}
                    classes={drawerClassOverrides}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.onDrawerToggle}
                        onKeyDown={this.onDrawerToggle}
                    >
                        <div className={classes.drawerContent}>
                            <List classes={listClassOverrides}>
                                <ListItem className={classes.drawerHeader}>
                                    <ListItemIcon>
                                        <Icon classes={iconClassOverrides}>menu</Icon>
                                    </ListItemIcon>
                                    <img
                                        src={routes.home + 'assets/images/auro_logo_drawer.png'}
                                        alt="Auro"
                                    />
                                </ListItem>
                                <Link
                                    to={'#'}
                                    className={classes.drawerLink}
                                >
                                    <ListItem className={classes.drawerItem}>
                                        <ListItemIcon>
                                            <Icon>notifications</Icon>
                                        </ListItemIcon>

                                        <ListItemText primary="Notifications"/>
                                    </ListItem>
                                </Link>
                                <Divider/>
                                <Link
                                    to={routes.home}
                                    className={classes.drawerLink}
                                >
                                    <ListItem className={classes.drawerItem}>
                                        <ListItemIcon>
                                            <Icon>domain</Icon>
                                        </ListItemIcon>

                                        <ListItemText primary="Onboarding"/>
                                    </ListItem>
                                </Link>
                                <Divider/>
                                <Link
                                    to={'#'}
                                    className={classes.drawerLink}
                                >
                                    <ListItem className={classes.drawerItem}>
                                        <ListItemIcon>
                                            <Icon>settings</Icon>
                                        </ListItemIcon>

                                        <ListItemText primary="Settings"/>
                                    </ListItem>
                                </Link>
                                <Divider/>
                            </List>
                        </div>
                    </div>
                </Drawer>

                <div className={classes.drawerMenu}>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        onClick={this.onDrawerToggle}
                    >
                        <i className="material-icons">menu</i>
                    </IconButton>
                </div>

                <div className={classes.main}>
                    <div className={classes.header}>
                        <img src={routes.home + 'assets/images/auro_logo.png'} alt="Auro"/>
                        <div className={classes.userMenuHeader}>
                            <h3 className={classes.h3}>
                                <Switch>
                                    <Route
                                        path={routes.settings}
                                        render={() => 'Account Settings'}
                                    />
                                    <Route render={() => 'Client Onboarding'}/>
                                </Switch>
                            </h3>
                            <div>
                                <Button
                                    onClick={this.onUserMenuButtonClick}
                                    className={classes.accountButton}
                                >
                                    <i className="material-icons">account_circle</i>
                                    <label className={classes.userName}>{shell.userAccount.user}</label>
                                </Button>
                                <Menu
                                    anchorEl={userMenuAnchorEl}
                                    open={Boolean(userMenuAnchorEl)}
                                    onClose={this.closeUserMenu}
                                    className={classes.dropDownMenu}
                                >
                                    <MenuItem onClick={this.onSettingsClick}>
                                        <i className="material-icons">settings</i>
                                        Settings
                                    </MenuItem>
                                    <Divider/>
                                    <MenuItem onClick={this.userLogout}>
                                        <i className="material-icons">exit_to_app</i>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>

                        </div>
                    </div>

                    <Switch>
                        <Route
                            path={routes.settings}
                            component={SettingsShell}
                        />
                        <Route component={Dashboard}/>
                    </Switch>
                </div>

                <Snackbar
                    {...notificationProps}
                    open={!!notification}
                    onClick={this.hideSnackbar}
                    onClose={this.hideSnackbar}
                />
            </div>
        );
    }
}

const componentWithStyles = withStyles(styles)(Shell);

export default connect(createStructuredSelector({
    shell: (state: RootState) => state.shell,
    notification: (state: RootState) => state.notifications.activeNotification
}))(componentWithStyles);
