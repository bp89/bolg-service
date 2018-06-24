import { isEmpty, isArray, isFunction, some, isMatch, omit } from 'lodash';

export interface Criteria {
    negate: boolean;
}

/**
 * Determine if criteria is met on a target collection
 * @param collection
 * @param criteria Object or array of objects.
 *  For single criterion: eg { code: 409 }
 *  For multiple criterion: eg [{ status: 409, otherProp: 'abc' }, {status: 500}]
 *      Objects within the array are treated as and OR clause,
 *      properties within an object are treated with an AND clause
 *  For negated criterion: eg { code: 409, negate: true }
 * @returns {boolean}
 */
export function meetsCriteria(collection: object | object[], criteria: Criteria | Criteria[] | Function = []) {
    if (isFunction(criteria)) {
        return criteria(collection);
    }

    if (isEmpty(criteria)) {
        return true;
    }

    const arr = (isArray(criteria)
        ? criteria
        : [criteria]) as Criteria[];

    let confirmingCriteria = arr.filter(c => !c.negate);
    let negatedCriteria = arr
        .filter(c => c.negate)
        .map(c => omit(c, 'negate'));

    return some(confirmingCriteria, criterion => isMatch(collection, criterion))
        || some(negatedCriteria, criterion => !isMatch(collection, criterion));
}