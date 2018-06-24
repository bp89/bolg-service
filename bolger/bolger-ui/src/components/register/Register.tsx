import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../../reducers';
import { State as RegisterState } from '../../reducers/registration';
import { StyledProps } from 'appProps';
import styles from './Register.styles';

interface Props extends StyledProps {
    registration: RegisterState;
}

export class Register extends React.Component<Props> {

    render() {
        return (
           <div>
               Registration
           </div>
        );
    }
}

export const componentWithStyles = withStyles(styles)(Register);

export default connect(createStructuredSelector({
    registration: (state: RootState) => state.registration
}))(componentWithStyles);