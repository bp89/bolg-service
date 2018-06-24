import { CSSProperties } from 'react';
import { agGridOnboarding, headers } from './common-styles';

export default () => ({
    rootContainer: {
        display: 'flex',
        marginTop: '10rem'
    },
    container: {
        extend: [agGridOnboarding],
        gridColumn: '2 / span 2',
        '& .ag-cell': {
            padding: '2.4rem 1rem'
        }
    } as CSSProperties,
    header: {
        extend: headers.header
    },
    h3: {
        extend: headers.h3,
    },
    blogs_grid: {
        display: 'grid',
        height: '100%',
        width: '100%',
        marginTop: '10rem'
    } as CSSProperties,
});