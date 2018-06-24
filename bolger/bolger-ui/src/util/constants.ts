export const endPoints = {
    BLOGS: {
        LIST: '/api/blogs/list'
    },
    AUTH: {
        LOGIN: '/api/login'
    }
};

export const routes = {
    login: '/login',
    blogs: '/blogs',
    settings: '/settings',
    accountDetails: '/settings/account-details',
    register: '/login/register',
    resetPassword: '/login/resetPassword',
    securityQuestionAnswer: '/login/securityQuestionAnswer',
    newPassword: '/login/newPassword',
    home: '/',
};

export const passwordValidationMessages = {
    noSpaces: 'No Spaces',
    minLength: 'Use 8 or more characters',
    letterCase: 'Use upper case and lower case letters (Aa)',
    numbers: ' Use at least 1 number (1)',
    noPartsOfEmail: 'Cannot include parts of email address',
    maxLength: 'Password length cannot exceed 72 characters'
};