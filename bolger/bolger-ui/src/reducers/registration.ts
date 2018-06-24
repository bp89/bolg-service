import ActionTypes from '../actions/ActionTypes';
import { Action } from 'appProps';
import { validateEmail, validatePassword } from '../util/CommonUtils';
import { isEmpty } from 'lodash';

export type State = {
    readonly registerFailure: boolean;
    readonly registerConflict: boolean;
    readonly registerSuccess: boolean;
    readonly isFormValid: boolean;
    readonly isRequesting: boolean;
    readonly redirectCountdown?: number,
    readonly form: {
        readonly email?: string,
        readonly isEmailValid?: boolean,
        readonly confirmEmail?: string,
        readonly isConfirmEmailValid?: boolean,
        readonly password: string,
        readonly confirmPassword?: string,
        readonly isConfirmPasswordValid?: boolean,
        readonly isEditingPassword?: boolean,
        readonly showValidationMessage?: boolean,
        readonly securityQuestion: string,
        readonly securityAnswer: string,
        readonly passwordValidation: {
            readonly numbers?: boolean,
            readonly noSpaces?: boolean,
            readonly minLength?: boolean,
            readonly maxLength?: boolean,
            readonly letterCase?: boolean,
            readonly noPartsOfEmail?: boolean,
            readonly isPasswordValid?: boolean
        }
    }
};

export const defaultState: State = {
    registerFailure: false,
    registerConflict: false,
    registerSuccess: false,
    isFormValid: false,
    isRequesting: false,
    form: {
        password: '',
        securityQuestion: '',
        securityAnswer: '',
        passwordValidation: {}
    }
};

export const registration = (state: State = defaultState, { type, payload }: Action) => {
    switch (type) {
        case ActionTypes.USER_REGISTRATION.EDIT:
            const isEmailValid = validateEmail(payload.email);
            const isConfirmEmailValid = isEmailValid && payload.confirmEmail === payload.email;
            const passwordValidation = validatePassword(payload.password, payload.email);
            const isConfirmPasswordValid = passwordValidation.isPasswordValid
                && payload.confirmPassword === payload.password;
            const isFormValid = isEmailValid && passwordValidation.isPasswordValid
                && isConfirmEmailValid
                && isConfirmPasswordValid
                && !isEmpty(payload.securityQuestion)
                && !isEmpty(payload.securityAnswer);
            const showValidationMessage = payload.isEditingPassword ||
                (payload.password && payload.password.length > 0);
            return {
                ...state,
                registerFailure: false,
                registerConflict: false,
                isFormValid,
                form: {
                    ...state.form,
                    ...payload,
                    isEmailValid,
                    isConfirmEmailValid,
                    isConfirmPasswordValid,
                    showValidationMessage,
                    passwordValidation
                }
            };

        case ActionTypes.USER_REGISTRATION.REQUEST:
            return {
                ...state,
                isRequesting: true
            };

        case ActionTypes.USER_REGISTRATION.CONFLICT:
            return {
                ...state,
                registerFailure: true,
                registerConflict: true,
                isRequesting: false
            };

        case ActionTypes.USER_REGISTRATION.FAILURE:
            return {
                ...state,
                registerFailure: true,
                registerConflict: false,
                isRequesting: false
            };

        case ActionTypes.USER_REGISTRATION.SUCCESS:
            return {
                ...state,
                registerFailure: false,
                registerConflict: false,
                registerSuccess: true,
                isRequesting: false
            };

        case ActionTypes.USER_REGISTRATION.COUNTDOWN:
            return {
                ...state,
                redirectCountdown: payload.countdown
            };

        case ActionTypes.USER_REGISTRATION.RESET:
        case ActionTypes.USER_REGISTRATION.REDIRECT:
            return {
                ...defaultState
            };

        default:
            return state;
    }
};