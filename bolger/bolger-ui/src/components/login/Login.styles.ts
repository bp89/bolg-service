import { errorMsg, elements, editor } from '../shared/common-styles';
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
    }
});