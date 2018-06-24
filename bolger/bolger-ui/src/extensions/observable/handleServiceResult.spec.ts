import { Observable } from 'rxjs/Observable';
import '../../rxjs-imports';
import { TestScheduler, next, complete } from '@kwonoj/rxjs-testscheduler-compat';
import './handleServiceResult';
import ActionTypes from '../../actions/ActionTypes';

describe('Observable', () => {

    let scheduler;

    beforeEach(() => {
        scheduler = new TestScheduler();
    });

    describe('handleServiceResult', () => {

        test('should map non-errored payload to successful action', () => {
            const payload = 'this is a payload';
            const stream = Observable.of(payload)
                .handleServiceResult(ActionTypes.WE_NEED.DOCS);

            let actual = scheduler.startScheduler(
                () => stream,
                { created: 100, subscribed: 200, unsubscribed: 1000 });

            const expected = [
                next(200, { type: ActionTypes.WE_NEED.DOCS.SUCCESS, payload }),
                complete(200)
            ];

            expect(actual.messages).toEqual(expected);
        });

        test('should pass errored payload through as is', () => {
            const payload = { error: 'an error'};
            const stream = Observable.of(payload)
                .handleServiceResult(ActionTypes.WE_NEED.DOCS);

            let actual = scheduler.startScheduler(
                () => stream,
                { created: 100, subscribed: 200, unsubscribed: 1000 });

            const expected = [
                next(200, payload),
                complete(200)
            ];

            expect(actual.messages).toEqual(expected);
        });
    });
});