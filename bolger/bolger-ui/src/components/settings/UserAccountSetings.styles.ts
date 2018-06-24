import { CSSProperties } from 'react';
import { colors, containers } from '../shared/common-styles';

export default () => ({
    container: {
        extend: containers.flexCol,
        marginTop: '5rem',
        alignItems: 'center'
    } as CSSProperties,
    formContainer: {
        background: colors.contentBackground,
        border: '1px solid #CCC',
        padding: '5rem',
        extend: containers.flexCol,
        width: '52rem'
    },
    header: {
        fontSize: '2rem',
        fontWeight: 400,
        margin: 0,
        textAlign: 'center'
    } as CSSProperties,
    requestText: {
        fontSize: '1.5rem',
        fontWeight: 300,
        margin: 0,
        textAlign: 'center'
    } as CSSProperties,
    form: {
        margin: '2.4rem 0',
        display: 'flex',
        flexWrap: 'wrap'
    } as CSSProperties,
    textField: {
        margin: '0 3.2rem 0.8rem 0',
        width: '20rem'
    },
    checkbox: {
        margin: '0 7.5rem 0 -1.5rem',
    },
    continueButton: {
        marginTop: '5rem',
        marginRight: '5rem'
    }
});