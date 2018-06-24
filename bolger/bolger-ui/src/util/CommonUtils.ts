import { Moment } from 'moment';
import { RowNode } from 'ag-grid';
import { isEmpty } from 'lodash';
import { validate as isEmail } from 'isemail';

const EMPTY_VALUE = '--';

export function dateFormatter(params: { value: Moment }) {
    if (params.value.isValid()) {
        return params.value.format('L');
    } else {
        return EMPTY_VALUE;
    }
}

export function dateComparator(date1: Moment, date2: Moment, nodeA: RowNode, nodeB: RowNode, isInverted: boolean) {
    let invert: number = isInverted ? -1 : 1;
    if (!date1.isValid()) {
        return invert;
    } else if (!date2.isValid()) {
        return -1 * invert;
    }
    return date1.diff(date2, 'd');
}

export function validateEmail(email: string | undefined | null = '') {
    return email && isEmail(email, { minDomainAtoms: 2 });
}

export function validatePassword(password: string | undefined = '', email: string | undefined = '') {
    let passwordValidation = {
        letterCase: false,
        numbers: false,
        noSpaces: false,
        minLength: false,
        maxLength: true,
        noPartsOfEmail: false,
        isPasswordValid: false
    };
    const lowerCaseRegex = /[a-z]/g;
    const upperCaseRegex = /[A-Z]/g;
    const numbersRegex = /[0-9]/g;
    const noSpacesRegex = /^\S+$/g;
    const noPartsOfEmailRegex = /[_.#@]/g;

    if (password) {
        if (password.match(lowerCaseRegex) && password.match(upperCaseRegex)) {
            passwordValidation.letterCase = true;
        }
        if (password.match(numbersRegex)) {
            passwordValidation.numbers = true;
        }
        if (password.match(noSpacesRegex)) {
            passwordValidation.noSpaces = true;
        }
        if (password.length >= 8) {
            passwordValidation.minLength = true;
        }
        if (password.length > 72) {
            passwordValidation.maxLength = false;
        }
        // skipping part of email after last . per requirement
        passwordValidation.noPartsOfEmail =
            isEmpty(email) || email.substring(0, email.lastIndexOf('.')).split(noPartsOfEmailRegex).every((item) => {
                return !password.includes(item);
            });

        if (passwordValidation.numbers
            && passwordValidation.letterCase
            && passwordValidation.minLength
            && passwordValidation.noSpaces
            && passwordValidation.noPartsOfEmail
            && passwordValidation.maxLength
        ) {
            passwordValidation.isPasswordValid = true;
        }
    }
    return passwordValidation;
}

export function getUserName(firstName: string, lastName: string, emailId: string) {
    if (firstName && lastName) {
        return `${firstName} ${lastName}`;
    } else if (firstName) {
        return firstName;
    } else if (lastName) {
        return lastName;
    } else if (emailId) {
        return emailId.split('@')[0];
    } else {
        return '';
    }
}