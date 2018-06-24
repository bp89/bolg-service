import { Observable } from 'rxjs/Observable';

import '../rxjs-imports';

export function signIn(credentials: object) {
    return Observable.from([]);
}

export function isAuthenticated(): boolean {
    return false;
}

// login / logout utility methods
// reset password