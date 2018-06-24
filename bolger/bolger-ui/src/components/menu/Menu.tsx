import React from 'react';
import { StyledProps } from 'appProps';
import { withStyles } from 'material-ui/styles';
import styles from './Menu.styles';
import { routes } from '../../util/constants';
import SVG from 'react-inlinesvg';
import { AppBar, Button } from 'material-ui';
import { NavLink } from 'react-router-dom';

export class Menu extends React.Component<StyledProps> {

    render() {
        const { classes } = this.props;
        let s1 = { verticalAlign: 'middle' };
        let s2 = { textAlign: 'right' };
        return (
            <div className={classes.rootContainer}>
                <AppBar title="Bolger" className={classes.colorPrimary}>
                    <table>
                        <tbody>
                        <tr style={s1}>
                            <td className="mui--appbar-height">
                                <SVG
                                    src={routes.home + 'assets/svg/logo.svg'}
                                    className={classes.logo}
                                />
                            </td>
                            <td className="mui--appbar-height" style={s2}>
                                <Button variant="raised">
                                    <NavLink
                                        to={routes.login}
                                    >
                                        Sign In
                                    </NavLink>
                                </Button>
                                <Button variant="raised">Register</Button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)<{}>(Menu);