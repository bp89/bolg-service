import React from 'react';
import { withStyles } from 'material-ui/styles';

import styles from './PasswordValidation.styles';
import { passwordValidationMessages } from '../../util/constants';
import classNames from 'classnames/bind';
import classnames from 'classnames';
import _ from 'lodash';

interface Props {
    password: string;
    showValidationMessage?: boolean;
    passwordValidation: {
        numbers?: boolean,
        noSpaces?: boolean,
        minLength?: boolean,
        maxLength?: boolean,
        letterCase?: boolean,
        noPartsOfEmail?: boolean,
        isPasswordValid?: boolean
    };
    classes: any;                   // tslint:disable-line:no-any
}

class PasswordValidation extends React.Component<Props> {

    render() {
        const { classes } = this.props;

        const passwordValidationClassName = validationKey =>
            this.props.passwordValidation[validationKey]
                ? classes.validPassword
                : classes.invalidPassword;

        const getValidationMessageClassName = validationKey =>
            _.isEmpty(this.props.password)
                ? classes.emptyPassword
                : passwordValidationClassName(validationKey);

        const containerClass = classNames({
            [classes.validationMessage] : true,
            [classes.visible]: this.props.showValidationMessage,
            [classes.hidden]: !this.props.showValidationMessage
        });

        return (
            <div
                className={containerClass}
            >
                {Object.keys(passwordValidationMessages).map((validationKey) => {
                    return (
                        validationKey !== 'maxLength'
                        || !this.props.passwordValidation.maxLength ?
                            <div
                                key={validationKey}
                                className={getValidationMessageClassName(validationKey)}
                            >
                                        <span className={classnames(classes.vAlign, 'material-icons')}>
                                            {this.props.passwordValidation[validationKey]
                                                ? 'done' : 'clear'}
                                        </span>
                                <span className={classes.vAlign}>
                                            {passwordValidationMessages[validationKey]}
                                        </span>
                            </div> : ''
                    );
                })}
            </div>
        );
    }
}

export default withStyles(styles)(PasswordValidation);