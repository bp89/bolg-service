import { mapValues } from 'lodash';

function generateActionValues(obj: object, prefix?: string) {
    return mapValues(obj, (v, k) => {
        const key = (prefix ? `${prefix}.` : '') + k;
        if (typeof v === 'object') {
            return generateActionValues(v, key);
        } else if (v !== '') {
            return v;
        }

        return key;
    });
}

export interface ServiceActions {
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
    CONFLICT: string;
    RETRY: string;
    ABORT: string;
    DENIED: string;
}

const serviceActions: ServiceActions = {
    REQUEST: '',
    SUCCESS: '',
    FAILURE: '',
    CONFLICT: '',
    RETRY: '',
    ABORT: '',
    DENIED: ''
};

const crudActions = {
    CREATE: { ...serviceActions },
    LIST: { ...serviceActions },
    UPDATE: { ...serviceActions },
    DELETE: { ...serviceActions }
};

const actions = {
    LOCATION_CHANGE: '@@router/LOCATION_CHANGE',
    NOTIFY: {
        TOAST: '',
        CLEAR: ''
    },
    USER_REGISTRATION: {
        ...serviceActions,
        EDIT: '',
        COUNTDOWN: '',
        REDIRECT: '',
        RESET: ''
    },
    USER_RESET: {
        ...serviceActions,
        EDIT: '',
        RESET: '',
        RECOVERY_TOKEN: {
            ...serviceActions
        },
        SECURITY_ANSWER: {
            ...serviceActions,
            EDIT: ''
        },
        NEW_PASSWORD: {
            ...serviceActions,
            EDIT: '',
            CONFLICT: ''
        },
        COUNTDOWN: '',
        REDIRECT: ''
    },
    USER_ACCOUNT: {
        UPDATE: {
            ...serviceActions,
            EDIT: ''
        },
        INFO: {
            ...serviceActions
        }
    },
    USER_AUTH: {
        LOGIN: {
            ...serviceActions,
            EDIT: '',
            RESET: ''
        },
        EXPIRED_OR_ERROR: ''
    },
    USER: {
        LOGOUT: {
            ...serviceActions,
        }
    },
    APP: {
        UNHANDLED_ERROR: ''
    },
    DASHBOARD: {
        ...crudActions
    },
    BLOGS: {
        ...serviceActions
    }
};

export default generateActionValues(actions);
