import React from 'react';
import { StyledProps } from 'appProps';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';

import { withStyles } from 'material-ui/styles';
import { createStructuredSelector } from 'reselect';
import styles from './UserAccountSetings.styles';
import ActionTypes from '../../actions/ActionTypes';
import { visibility } from '../shared/common-styles';
import { State as UserAccountSettingsState } from '../../reducers/userAccountSettings';
import { UserAccountMeta } from '../../types/UserAccount';

interface Props extends StyledProps {
    userAccountSettings: UserAccountSettingsState;
    userAccount: UserAccountMeta;
}

export class UserAccountSettings extends React.Component<Props> {

    onFieldChange = accountDetailsForm => this.props.dispatch({
        type: ActionTypes.USER_ACCOUNT.UPDATE.EDIT,
        payload: accountDetailsForm
    })

    handleSubmit = () => this.props.dispatch({
        type: ActionTypes.USER_ACCOUNT.UPDATE.REQUEST,
        payload: {
            ...this.props.userAccountSettings.form,
            emailId: this.props.userAccount.emailId,
            symphonyUsername: this.props.userAccountSettings.form.isSymphony
                ? this.props.userAccountSettings.form.symphonyUsername
                : ''
        }
    })

    render() {
        const { classes, userAccountSettings } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.formContainer}>
                    <h2 className={classes.header}>
                        Welcome to AuroTFP Client Digital Channel!
                    </h2>
                    <h4 className={classes.requestText}>
                        Please take a moment to add some (optional) information to your profile.
                    </h4>
                    <div className={classes.form}>
                        <TextField
                            className={classes.textField}
                            label="First Name"
                            onChange={e => this.onFieldChange({
                                ...userAccountSettings.form,
                                firstName: e.target.value
                            })}
                        />
                        <TextField
                            className={classes.textField}
                            label="Last Name"
                            onChange={e =>
                                this.onFieldChange({ ...userAccountSettings.form, lastName: e.target.value })}
                        />
                        <TextField
                            className={classes.textField}
                            label="Phone"
                            type="phone"
                            onChange={e => this.onFieldChange(
                                { ...userAccountSettings.form, phone: e.target.value })
                            }
                        />

                        <div className={classes.textField}>
                            {/* Avatar is not part of the current US hence left blank space for same */}
                            {/*<h2> Avatar</h2>*/}
                        </div>
                        <FormControlLabel
                            className={classes.checkbox}
                            control={
                                <Checkbox
                                    data-automation-checked={!!userAccountSettings.form.isBloombergChat}
                                    onChange={e => this.onFieldChange({
                                        ...userAccountSettings.form,
                                        isBloombergChat: e.target.checked
                                    })
                                    }
                                />
                            }
                            label="I'm on Bloomberg (IB)"
                        />
                        <FormControlLabel
                            className={classes.checkbox}
                            control={
                                <Checkbox
                                    data-automation-checked={!!userAccountSettings.form.isSymphony}
                                    onChange={e => this.onFieldChange({
                                        ...userAccountSettings.form,
                                        isSymphony: e.target.checked
                                    })}
                                />
                            }
                            label="I'm on Symphony"
                        />
                        <div className={classes.textField}/>
                        <TextField
                            className={classes.textField}
                            label="Symphony Username"
                            type="text"
                            style={userAccountSettings.form.isSymphony ? visibility.visible : visibility.hidden}
                            onChange={e => this.onFieldChange({
                                ...userAccountSettings.form,
                                symphonyUsername: e.target.value
                            })}
                        />

                        <Button
                            className={classes.continueButton}
                            onClick={this.handleSubmit}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

const componentWithStyles = withStyles(styles)(UserAccountSettings);

export default connect(createStructuredSelector({
    userAccountSettings: (state: RootState) => state.userAccountSettings,
    userAccount: (state: RootState) => state.shell.userAccount
}))(componentWithStyles);