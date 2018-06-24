import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import styles from './SettingsShell.styles';
import { StyledProps } from 'appProps';
import { routes } from '../../util/constants';
import { Route, Switch } from 'react-router';
import UserSettings from './UserSettings';
import UserAccountSettings from './UserAccountSettings';

interface Props extends StyledProps {
}

export class SettingsShell extends React.Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.rootContainer}>
                <Switch>
                    <Route
                        path={routes.accountDetails}
                        component={UserAccountSettings}
                    />
                    <Route component={UserSettings}/>
                </Switch>
            </div>
        );
    }
}

export const componentWithStyles = withStyles(styles)(SettingsShell);

export default connect()(componentWithStyles);