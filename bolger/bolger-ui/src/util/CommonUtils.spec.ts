import { getUserName, validatePassword } from "./CommonUtils";

describe('Test validatePassword for different scenarios', () => {

    let TEST_PARAMETERS = [
        {
            password: ' ',
            email: '',
            expected: {
                letterCase: false,
                numbers: false,
                noSpaces: false,
                minLength: false,
                noPartsOfEmail: true,
                isPasswordValid: false
            }
        },
        {
            password: '9',
            email: '',
            expected: {
                letterCase: false,
                numbers: true,
                noSpaces: true,
                minLength: false,
                noPartsOfEmail: true,
                isPasswordValid: false
            }
        },
        {
            password: 'a',
            email: '',
            expected: {
                letterCase: false,
                numbers: false,
                noSpaces: true,
                minLength: false,
                noPartsOfEmail: true,
                isPasswordValid: false
            }
        },
        {
            password: 'aA',
            email: '',
            expected: {
                letterCase: true,
                numbers: false,
                noSpaces: true,
                minLength: false,
                noPartsOfEmail: true,
                isPasswordValid: false
            }
        },
        {
            password: 'aA9',
            email: '',
            expected: {
                letterCase: true,
                numbers: true,
                noSpaces: true,
                minLength: false,
                noPartsOfEmail: true,
                isPasswordValid: false
            }
        },
        {
            password: 'aA9@3s43',
            email: '',
            expected: {
                letterCase: true,
                numbers: true,
                noSpaces: true,
                minLength: true,
                noPartsOfEmail: true,
                isPasswordValid: true
            }
        },
        {
            password: 'Th3rm@l1',
            email: '',
            expected: {
                letterCase: true,
                numbers: true,
                noSpaces: true,
                minLength: true,
                noPartsOfEmail: true,
                isPasswordValid: true
            }
        },
        {
            password: 'test',
            email: 'test@nowhere.com',
            expected: {
                letterCase: false,
                numbers: false,
                noSpaces: true,
                minLength: false,
                noPartsOfEmail: false,
                isPasswordValid: false
            }
        },
        {
            password: 'nowhere',
            email: 'test@nowhere.com',
            expected: {
                letterCase: false,
                numbers: false,
                noSpaces: true,
                minLength: false,
                noPartsOfEmail: false,
                isPasswordValid: false
            }
        },
        {
            password: 'norest',
            email: 'test#rest@nowhere.com',
            expected: {
                letterCase: false,
                numbers: false,
                noSpaces: true,
                minLength: false,
                noPartsOfEmail: false,
                isPasswordValid: false
            }
        },
        {
            password: 'norest',
            email: 'test.rest@nowhere.com',
            expected: {
                letterCase: false,
                numbers: false,
                noSpaces: true,
                minLength: false,
                noPartsOfEmail: false,
                isPasswordValid: false
            }
        },
        {
            password: 'norest',
            email: 'test_rest@nowhere.com',
            expected: {
                letterCase: false,
                numbers: false,
                noSpaces: true,
                minLength: false,
                noPartsOfEmail: false,
                isPasswordValid: false
            }
        },
        {
            password: 'therm@l',
            email: 'test_rest@nowhere.com',
            expected: {
                letterCase: false,
                numbers: false,
                noSpaces: true,
                minLength: false,
                noPartsOfEmail: true,
                isPasswordValid: false
            }
        },
        {
            password: 'Th3rm@l1',
            email: 'test_rest@nowhere.com',
            expected: {
                letterCase: true,
                numbers: true,
                noSpaces: true,
                minLength: true,
                noPartsOfEmail: true,
                isPasswordValid: true
            }
        }
    ]

    TEST_PARAMETERS.forEach(data => {
        it('GIVEN password is `' + data.password + "` and email is `" + data.email + "` WHEN invoked validatePassword THEN the expected output is " + JSON.stringify(data.expected), () => {
            const output = validatePassword(data.password, data.email);
            expect(output).toMatchObject(data.expected);
        });
    })
});


describe('Test getUserName', () => {
    let TEST_PARAMETERS = [
        {
            firstName: 'John',
            lastName: '',
            email: 'test@nowhere.com',
            expected: 'John'
        },
        {
            firstName: '',
            lastName: 'Tunda',
            email: 'test@nowhere.com',
            expected: 'Tunda'
        },
        {
            firstName: 'John',
            lastName: 'Tunda',
            email: 'test@nowhere.com',
            expected: 'John Tunda'
        },
        {
            firstName: '',
            lastName: '',
            email: 'test@nowhere.com',
            expected: 'test'
        },
        {
            firstName: '',
            lastName: '',
            email: '',
            expected: ''
        }
    ];

    TEST_PARAMETERS.forEach(data => {
        it('GIVEN firstName is `' + data.firstName + "`, lastName is `" + data.lastName + "` and email is `" + data.email + "` WHEN invoked getUserName THEN the expected output is " + data.expected, () => {
            const output = getUserName(data.firstName, data.lastName, data.email);
            expect(output).toBe(data.expected);
        });
    })
})


