import { colors, editor, elements, errorMsg } from '../shared/common-styles';
import { CSSProperties } from 'react';
import spaces from '../shared/spaces';

export default () => ({
    rootContainer: {
        display: 'flex'
    },
    container: {
        extend: editor.pageContainer
    },
    containerError: {
        extend: editor.pageContainerError
    },
    errorMsg,
    form: {
        extend: editor.formContainer
    },
    h2: {
        extend: elements.h2,
        marginBottom: spaces.zero
    },
    inputWithIcon: {
        extend: editor.formField1WithIcon
    } as CSSProperties,
    rememberMe: {
        width: '100%',
        textAlign: 'right',
        '& > label': {
            marginRight: 0
        }
    },
    footer: {
        extend: editor.formFooter
    },
    progressBar: {
        extend: editor.progressBar
    },
    logo: {
        height: '1.6rem',
        width: '1.6rem'
    },
    header: {
        borderBottom: `1px solid ${colors.primary}`,

        '& h3': {
            extend: elements.h3,
            margin: '1.4rem 0 0.4rem',
            color: colors.primary,
            letterSpacing: '0.05rem'
        }
    } as CSSProperties,
    colorPrimary: {
        backgroundColor: colors.content_lighter
    }
});