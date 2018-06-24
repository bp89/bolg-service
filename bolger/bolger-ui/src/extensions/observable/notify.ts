import { Observable } from 'rxjs/Observable';
import { NotificationMeta } from '../../util/Notifications';

/**
 * Raise a notification action based on the action type
 * @param triggerType Action type that triggers the notification
 * @param notification Notification config object
 */
export function notify<T extends any>(this: Observable<T>, // tslint:disable-line:no-any
                                      triggerType: string,
                                      notification: NotificationMeta) {
    return this.mergeMap(action => Observable.of(action)
        .concat(Observable.of({
                type: notification.actionType,
                payload: {
                    ...notification,
                    source: action
                }})
            .filter(({ payload }) => payload.source.type === triggerType)
        )
    );
}

Observable.prototype.notify = notify;

declare module 'rxjs/Observable' {
    interface Observable<T> { // tslint:disable-line
        notify: typeof notify;
    }
}