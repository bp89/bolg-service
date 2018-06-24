import { agGridCommon, colors, containers, elements } from '../shared/common-styles';
import { CSSProperties } from 'react';

export const headers = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${colors.secondary}`,
        padding: '.3rem 0 .5rem 0',
        alignItems: 'center'
    },
    h3: {
        extend: elements.h3,
        flex: 1,
        margin: 0
    }
};

export const container = {
    extend: containers.flexCol,
    background: colors.contentBackground,
    padding: '1rem'
};

export const agGridOnboarding = {
    extend: [container, agGridCommon],
    '& .ag-theme-material': {
        marginTop: '2rem'
    },
    '& .ag-cell-center': {
        justifyContent: 'center'
    },
    '& .ag-cell-wrap': {
        whiteSpace: 'normal',
        lineHeight: '1.6rem'
    } as CSSProperties,
    '& [col-id=name].ag-column-hover, [col-id=actions].ag-column-hover': {
        overflow: 'visible'
    },
    '& .ag-header-icon.ag-sort-order': {
        display: 'none'
    }
};