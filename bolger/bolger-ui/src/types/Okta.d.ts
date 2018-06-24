interface OktaAuth {
    redirect: Function;
    handleAuthentication: Function;
    isAuthenticated: () => Promise<boolean>;
    signIn: (credentials: object) => Promise<OktaResponse>;
    signOut: () => Promise<void>;
    token: OktaToken;
    tokenManager: any;
}

interface OktaToken {
    getWithoutPrompt: (options: object) => Promise<any>;
}

interface OktaResponse {
    status: string;
    sessionToken: string;
    session: {
        token: string,
        setCookieAndRedirect: Function
    };
    user: OktaUser;
    stepUp?: {
        url: string,
        finish: Function
    };
    // noinspection TsLint
    claims: any;
}

interface OktaUser {
    id: string;
    passwordChanged: string;
    profile: {
        firstName: string;
        lastName: string;
        locale: string;
        login: string;
        timeZone: string;
    };
}