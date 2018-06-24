import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ActionTypes from '../../actions/ActionTypes';
import { RootState } from '../../reducers';
import { State as UserState } from '../../reducers/user';
import { StyledProps } from 'appProps';
import { isAuthenticated } from '../../util/auth';
import styles from './Login.styles';

interface Props extends StyledProps {
    user: UserState;
}

export class Login extends React.Component<Props> {
    state = {
        showPassword: false,
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    componentDidMount() {
        if (isAuthenticated()) {
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.dispatch({
            type: ActionTypes.USER_AUTH.LOGIN.RESET,
            payload: {}
        });
    }

    keyPress = evt => {
        if (evt.charCode === 13) {
            this.onSubmit();
        }
    }

    onSubmit = () => this.props.dispatch({
        type: ActionTypes.USER_AUTH.LOGIN.REQUEST,
        payload: this.props.user.form
    })

    onChange = user => this.props.dispatch({
        type: ActionTypes.USER_AUTH.LOGIN.EDIT,
        payload: user
    })

    render() {
        return (
            <div>
                Login
            </div>
        );
    }
}

export const componentWithStyles = withStyles(styles)(Login);

export default connect(createStructuredSelector({
    user: (state: RootState) => state.user
}))(componentWithStyles);