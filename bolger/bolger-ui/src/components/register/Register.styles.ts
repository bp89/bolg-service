import { confirmation, editor, elements, errorMsg } from '../shared/common-styles';
import { colors } from '../shared/common-styles';
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
    successContainer: {
        extend: confirmation.container
    },
    successTitle: {
        extend: confirmation.header
    },
    successSubTitle: {
        extend: elements.h3,
        marginTop: 0
    },
    successMessage: {
        extend: confirmation.message
    },
    link: {
        extend: confirmation.link
    },
    errorMsg,
    h2: {
        extend: elements.h2,
        marginBottom: spaces.zero
    },
    formSubTitle: {
        extend: editor.formSubTitle
    },
    form: {
        extend: editor.formContainer
    },
    textField: {
        extend: editor.formField2
    },
    textField1: {
        extend: editor.formField1
    },
    asterisk: {
        extend: editor.passwordAsterisk
    },
    footer: {
        extend: editor.formFooter
    },
    progressBar: {
        extend: editor.progressBar
    },
    securityQuestionLabel: {
        marginBottom: '-1.5rem'
    },
    registerFormWidth: {
        display: 'flex',
        flex: '0 0 100%'
    },
    formAccountHeading: {
        display: 'flex',
        flex: '0 0 100%',
        height: '2.5rem'
    },
    securityQuestionText: {
        fontSize: '1.2rem',
        marginTop: '2.6rem',
        color: colors.content_light
    }
});