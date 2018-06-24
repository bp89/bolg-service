import { colors, containers, linkHover } from './shared/common-styles';
import { CSSProperties } from 'react';

export default () => ({
    outerContainer: {
        extend: containers.flex,
        backgroundColor: colors.background,
        height: '100vh'
    },
    main: {
        extend: [
            containers.flexCol,
            containers.responsive
        ],
        margin: '3rem 6rem',
        overflowX: 'hidden'
    } as CSSProperties,
    container: {
        extend: containers.flexCol,
        alignItems: 'center',
    } as CSSProperties,
    bar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderBottom: `1px solid ${colors.primary}`
    },
    tabsRoot: {
        minHeight: '2.6rem'
    },
    tabsFlexContainer: {
        justifyContent: 'flex-end'
    } as CSSProperties,
    tabRoot: {
        textTransform: 'none',
        fontWeight: 400,
        color: colors.primary,
        fontSize: '1.2rem',
        height: '2.6rem',
        minWidth: 0,
        marginLeft: '1.6rem'
    } as CSSProperties,
    tabWrapper: {
        extend: linkHover,
        flexDirection: 'row'
    } as CSSProperties,
    tabLabel: {
        fontSize: '1.6rem',
        fontWeight: 400
    } as CSSProperties,
    tabLabelContainer: {
        padding: 0
    },
    tabContentContainer: {
        extend: containers.flexCol,
        marginTop: '3.2rem'
    } as CSSProperties

});