import { Action } from 'appProps';

export type State = {
};

export const defaultState: State = {
};

export const loginShell = (state: State = defaultState, { type, payload }: Action) => {

    switch (type) {

        default:
            return state;
    }
};