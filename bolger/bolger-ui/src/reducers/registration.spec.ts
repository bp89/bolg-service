import { defaultState } from './registration';
import ActionTypes from '../actions/ActionTypes';
import { registration } from "./registration";

describe('Registration.actions', () => {

    describe('ActionTypes.USER_REGISTRATION.FAILURE', () => {
        it('WHEN user registration fails THEN registerFailure flag should set to true', () => {
            const payload = {};

            let nextState = registration(defaultState, {
                type: ActionTypes.USER_REGISTRATION.FAILURE,
                payload: payload
            });

            expect(nextState.registerFailure).toBeTruthy();
            expect(nextState.isFormValid).toBeFalsy();
            expect(nextState.form).toMatchObject(payload);
        });
    });

    describe('ActionTypes.USER_REGISTRATION.SUCCESS', () => {
        it('WHEN user registration is successful THEN state should not change', () => {
            const payload = {};

            let nextState = registration(defaultState, {
                type: ActionTypes.USER_REGISTRATION.SUCCESS,
                payload: payload
            });

            expect(nextState.form).toMatchObject(payload);
        });
    });

    describe('ActionTypes.USER_REGISTRATION.EDIT', () => {
        it('when called for first time', () => {
            const payload = {};

            let nextState = registration(defaultState, {
                type: ActionTypes.USER_REGISTRATION.EDIT,
                payload: payload
            });

            expect(nextState.registerFailure).toBeFalsy();
            expect(nextState.isFormValid).toBeFalsy();
            expect(nextState.form).toMatchObject(payload);
        });

        it('WHEN called with proper payload and matching email and confirmEmail THEN all validation flags are true', () => {
            const payload = {
                email: 'issac.juan@nowhere.com',
                confirmEmail: 'issac.juan@nowhere.com',
                password: 'Test@123',
                confirmPassword: 'Test@123',
                securityQuestion:'What was the name of your first roommate?',
                securityAnswer:'test'
            };

            let nextState = registration(defaultState, {
                type: ActionTypes.USER_REGISTRATION.EDIT,
                payload: payload
            });

            const expected = {
                ...payload,
                isEmailValid: true,
                isConfirmEmailValid: true,
                passwordValidation:
                    {
                        letterCase: true,
                        numbers: true,
                        noSpaces: true,
                        minLength: true,
                        noPartsOfEmail: true,
                        isPasswordValid: true
                    }
            }
            expect(nextState.registerFailure).toBeFalsy();
            expect(nextState.isFormValid).toBeTruthy();
            expect(nextState.form).toMatchObject(expected);
        });

        it('WHEN called with mismatching confirmEmail and email payload THEN isConfirmEmailValid should be set to false', () => {
            const payload = {
                email: 'issac.juan@nowhere.com',
                confirmEmail: 'mismatch.juan@nowhere.com',
                password: 'Test@123',
                confirmPassword: 'Test@123',
                securityQuestion:'What was the name of your first roommate?',
                securityAnswer:'test'
            };

            let nextState = registration(defaultState, {
                type: ActionTypes.USER_REGISTRATION.EDIT,
                payload: payload
            });

            const expected = {
                ...payload,
                isEmailValid: true,
                isConfirmEmailValid: false,
                passwordValidation:
                    {
                        letterCase: true,
                        numbers: true,
                        noSpaces: true,
                        minLength: true,
                        noPartsOfEmail: true,
                        isPasswordValid: true
                    }
            }
            expect(nextState.registerFailure).toBeFalsy();
            expect(nextState.isFormValid).toBeFalsy();
            expect(nextState.form).toMatchObject(expected);
        });
    });
})
;