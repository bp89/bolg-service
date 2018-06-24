import React from 'react';
import { Route, Switch } from 'react-router';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from 'material-ui/styles';

import { State as BlogShellState } from '../reducers/blogShell';
import { StyledProps } from 'appProps';
import Register from './register/Register';
import { routes } from '../util/constants';
import Blogs from './blogs/Blogs';
import { RootState } from '../reducers';
import styles from './BlogShell.styles';
import Menu from './menu/Menu';
import { LoginShell } from './LoginShell';

interface Props extends StyledProps {
    blogShell: BlogShellState;
}

export class BlogShell extends React.Component<Props> {
    handleChange = (e, value) => {
        this.props.history.push(value);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.outerContainer}>
                <div className={classes.main}>
                    <div className={classes.container}>
                        <Menu/>
                        <Switch>
                            <Route
                                path={routes.register}
                                component={Register}
                            />
                            <Route
                                path={routes.login}
                                component={LoginShell}
                            />
                            <Route
                                path={routes.blogs}
                                component={Blogs}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const componentWithStyles = withStyles(styles)(BlogShell);

export default connect(createStructuredSelector({
    blogShell: (state: RootState) => state.blogShell,
}))(componentWithStyles);
