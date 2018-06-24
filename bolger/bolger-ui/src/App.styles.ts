import { colors } from './components/shared/common-styles';

import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { CSSProperties } from 'react';

export const globalContainer = {
    '@import': [
        'url(https://fonts.googleapis.com/css?family=Rubik:300|Titillium+Web:200,300,400,600,700)',
        'url(https://fonts.googleapis.com/icon?family=Material+Icons)'
    ] as CSSProperties,
    '@global html, body, #root': {
        margin: 0,
        padding: 0,
        height: '100vh'
    },
    '@global html': {
        fontSize: '62.5%'
    },
    '@global body': {
        backgroundColor: colors.contentBackground,
        fontFamily: 'Titillium Web, sans-serif',
        color: colors.content
    }
};

export const theme = createMuiTheme({
    palette: {
        primary: { main: colors.primary },
        secondary: { main: colors.secondary }
    },
    typography: {
        htmlFontSize: 10,
        fontFamily: 'Titillium Web, sans-serif'
    },
    overrides: {
        MuiLinearProgress: {
            root: {
                height: '0.3rem'
            }
        },
        MuiButton: {
            root: {
                fontWeight: 200,
                fontSize: '1.5rem',
                textTransform: 'unset',
                backgroundColor: colors.buttonActiveBackground,
                color: colors.buttonActiveFont,
                '&:hover': {
                    backgroundColor: colors.buttonActiveBackground
                }
            },
            disabled: {
                backgroundColor: colors.buttonInactiveBackground,
                color: colors.buttonInactiveFont
            }
        },
        MuiInputLabel: {
            shrink: {
                color: colors.secondary
            }
        }
    }
});
