import { colors, visibility } from '../shared/common-styles';
import { CSSProperties } from 'react';

export default () => ({
    validationMessage: {
        width: '100%',
        fontSize: '1.2rem',
        fontWeight: 400
    } as CSSProperties,
    invalidPassword: {
        color: colors.error
    },
    validPassword: {
        color: colors.success
    },
    emptyPassword: {
        color: colors.content_light
    },
    vAlign: {
        verticalAlign: 'middle'
    },
    visible: {
        extend: visibility.visible
    },
    hidden: {
        extend: visibility.hidden
    }
});