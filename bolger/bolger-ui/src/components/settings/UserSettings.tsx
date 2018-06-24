import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import styles from './SettingsShell.styles';
import { StyledProps } from 'appProps';

interface Props extends StyledProps {
}

export class UserSettings extends React.Component<Props> {
    render() {
        return (
            <>
                <div/>
            </>
        );
    }
}

export const componentWithStyles = withStyles(styles)(UserSettings);

export default connect()(componentWithStyles);