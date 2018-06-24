import { colors, containers, elements, linkHover } from './shared/common-styles';
import { CSSProperties } from 'react';

export default () => ({
    container: {
        extend: containers.flex,
        backgroundColor: colors.background,
        height: '100vh'
    },
    main: {
        extend: [
            containers.flexCol,
            containers.responsive
        ],
        margin: '3rem 6rem 3rem 0',
        overflowX: 'hidden'
    } as CSSProperties,
    header: {
        borderBottom: `1px solid ${colors.primary}`,

        '& h3': {
            extend: elements.h3,
            margin: '1.4rem 0 0.4rem',
            color: colors.primary,
            letterSpacing: '0.05rem'
        }
    } as CSSProperties,
    tabContentContainer: {
        extend: containers.flexCol,
        marginTop: '2.5rem'
    } as CSSProperties,
    tabRoot: {
        textTransform: 'none',
        fontWeight: 200,
        fontSize: '3.2rem',
        color: colors.content_light,
        margin: '1rem 2rem 0 0',
    } as CSSProperties,
    tabLabel: {
        fontSize: '2.3rem'
    },
    tabLabelContainer: {
        padding: 0
    },
    tabSelected: {
        color: colors.secondary,
        fontWeight: 400
    } as CSSProperties,
    h3: {
        extend: elements.h3,
        flex: 1,
        textTransform: 'uppercase'
    },
    userMenuHeader: {
        justifyContent: 'space-between',
        display: 'flex',
        color: colors.primary,
        '& button': {
            color: colors.primary
        },
    } as CSSProperties,
    dropDownMenu: {
        marginTop: '5.5rem',
        '& i.material-icons': {
            marginRight: '1rem'
        }
    },
    userName: {
        fontSize: '1.5rem',
        paddingLeft: '0.5rem',
        textTransform: 'capitalize'
    },
    drawer: {
        width: '250px',
        backgroundColor: colors.content_lighter
    },
    drawerMenu: {
        flex: 0,
        marginRight: '1.2rem'
    },
    drawerHeader: {
        backgroundColor: colors.primary
    } as CSSProperties,
    drawerContent: {
        backgroundColor: colors.background
    },
    drawerItem: {
        extend: containers.flex,
        textDecoration: 'none',
        '&:hover': {
            '& h3, .material-icons': {
                extend: 'iconRoot'
            },
            backgroundColor: colors.secondary
        }
    } as CSSProperties,
    drawerLink: {
        extend: containers.flex,
        textDecoration: 'none'
    } as CSSProperties,
    iconRoot: {
        color: colors.contentBackground
    },
    listRoot: {
        padding: 0
    } as CSSProperties,
    accountButton: {
        extend: linkHover
    },
});