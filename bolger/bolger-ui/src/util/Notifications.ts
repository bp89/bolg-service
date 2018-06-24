import ActionTypes from '../actions/ActionTypes';

export interface NotificationMeta {
    actionType: string;
    message: any; // tslint:disable-line:no-any
    autoHideDuration?: number;
}

export default {
    COMMON: {
        SERVER_ERROR: {
            actionType: ActionTypes.NOTIFY.TOAST,
            message: 'Something went wrong. Please try again.'
        },
        DENIED: {
            actionType: ActionTypes.NOTIFY.TOAST,
            message: 'You are not authorised to perform the requested operation.',
            autoHideDuration: 10000
        }
    },
    DOWNLOAD: {
        STARTED: {
            actionType: ActionTypes.NOTIFY.TOAST,
            message: 'Your download has been requested, please wait...'
        },
        SUCCESS: {
            actionType: ActionTypes.NOTIFY.TOAST,
            message: 'Your file has been successfully downloaded.',
            autoHideDuration: 10000
        }
    }
};
