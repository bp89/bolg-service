import color from './colors';
import space from './spaces';
import { CSSProperties } from 'react';

export const colors = {
    background: color.lightGray.light,
    primary: color.purple.primary,
    secondary: color.blue.primary,
    contentBackground: color.white,
    containerBorder: color.gray.light,
    content: color.slate.primary,
    content_light: color.gray.primary,
    content_lighter: color.lightGray.primary,
    highlight: color.green.primary,
    error: color.red.primary,
    success: color.green.dark,
    buttonInactiveBackground: color.lightGray.lighter,
    buttonInactiveFont: color.lightGray.primary,
    buttonActiveBackground: color.blue.primary,
    buttonActiveFont: color.white,
    buttonLinkBackground: color.white,
    buttonLinkFont: color.lightGray.primary,
    buttonLinkActiveBackground: color.lightGray.lighter,
    buttonLinkActiveFont: color.lightGray.primary
};

export const visibility = {
    visible: {
        visibility: 'visible'
    },
    hidden: {
        visibility: 'hidden'
    }
};

export const containers = {
    flex: {
        display: 'flex',
        flex: 1
    },
    flexCol: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    flexAlign: {
        display: 'flex',
        flex: 1,
        alignItems: 'center'
    },
    responsive: {
        '@media (min-width: 1280px)': {
            // minWidth: '1280px'
        },
        '@media (max-width: 1280px)': {
            // minWidth: '100vw'
        }
    }
};

export const elements = {
    h1: {
        fontSize: '2rem',
        fontWeight: 600,
        color: colors.secondary
    },
    h2: {
        fontSize: '3rem',
        fontWeight: 200,
        color: colors.secondary,
        textAlign: 'center',
        marginTop: space.zero,
        marginBottom: space.basex3
    },
    h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: colors.secondary
    },
    h4: {
        fontSize: '2rem',
        fontWeight: 200,
        color: colors.secondary,
    },
    p: {
        fontSize: '1.3rem'
    }
};

export const editor = {
    pageContainer: {
        padding: space.basex5,
        width: '60rem',
        background: colors.contentBackground,
        border: `1px solid ${colors.containerBorder}`
    },
    pageContainerError: {
        padding: space.basex5,
        width: '60rem',
        background: colors.contentBackground,
        border: `1px solid ${colors.containerBorder}`,
        borderTop: `3px solid ${colors.error}`,
        paddingTop: '0.6rem'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    formHeader: {
        width: '100%',
        fontSize: '1.5rem',
        fontWeight: 200,
        color: colors.content_light,
        margin: space.zero
    },
    formFooter: {
        marginTop: space.basex3,
        '& > button, a': {
            marginRight: space.basex2
        },
        '& > a': {
            fontSize: '1.5rem',
            fontWeight: 200,
            fontStyle: 'italic',
            color: colors.content_light,
            verticalAlign: 'middle'
        }
    },
    formField1: {
        marginTop: space.basex3,
        width: '100%'
    },
    formField1WithIcon: {
        marginTop: space.basex3,
        width: '100%',
        '& > div': {
            width: `calc(100% - ${space.basex4})`,
        },
        '& > i': {
            verticalAlign: 'bottom',
            marginRight: space.base
        }
    },
    formField2: {
        marginTop: space.basex3,
        width: `calc(1/2*100% - (1-1/2)*${space.basex2})`
    },
    passwordAsterisk: {
        opacity: 0.5
    },
    progressBar: {
        marginTop: space.basex5,
        marginLeft: space.negative.basex5,
        marginRight: space.negative.basex5,
        marginBottom: space.negative.basex5
    },
    formSubTitle: {
        fontSize: '2rem',
        fontWeight: 200,
        color: colors.secondary,
    }
};

export const confirmation = {
    container: {
        height: '100%',
        extend: containers.flexCol,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 200
    },
    header: {
        fontSize: '1.6rem',
        color: colors.secondary,
        textAlign: 'center'
    },
    message: {
        extend: elements.p,
        color: colors.content
    },
    link: {
        color: colors.content,
        textDecoration: 'none'
    }
};

export const agGridCommon = {
    '& .ag-theme-material': {
        flex: 1,
        height: '100%'
    },
    '& .ag-header-cell-label .ag-header-cell-text': {
        extend: elements.p,
        flex: 'initial',
        alignItems: 'center',
        color: colors.secondary
    },
    '& .ag-header-cell': {
        lineHeight: 'inherit',
        padding: '0 1rem'
    },
    '& .ag-header-cell-label .ag-header-icon': {
        marginTop: '-0.5rem'
    },
    '& .ag-header-cell-label .ag-sort-order': {
        marginTop: 0
    },
    '& .ag-cell': {
        lineHeight: '4rem',
        padding: '0 1rem',
        fontSize: '1.5rem',
        fontFamily: 'Titillium Web',
        fontWeight: 300,
        fontStyle: 'normal',
        color: colors.content,
        letterSpacing: '.05em',
        display: 'flex',
        alignItems: 'center'
    },
    '& .ag-cell-focus': {
        border: 0
    },
    '& .ag-row-hover, .ag-row-hover > .ag-column-stripe, .ag-row-selected, .ag-row-selected > .ag-column-stripe': {
        backgroundColor: color.green.lighter
    },
    '& .ag-column-stripe': {
        backgroundColor: color.lightGray.lighter
    }
};

export const errorMsg = {
    color: colors.error,
    textAlign: 'center',
    fontSize: '1.3rem',

    '& .material-icons': {
        verticalAlign: 'middle',
        marginRight: '0.5rem',
        marginBottom: '0.3rem'
    }
};

export const linkHover = {
    '&:hover': {
        cursor: 'pointer',
        color: colors.secondary,
        opacity: 1,
        backgroundColor: 'transparent'
    }
};

export const tooltip = {
    content: {
        extend: containers.flexAlign
    } as CSSProperties,
    tooltip: {
        extend: containers.flexAlign,
        marginLeft: '1rem',
        color: colors.background
    } as CSSProperties
};