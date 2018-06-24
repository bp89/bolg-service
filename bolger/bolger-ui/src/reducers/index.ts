import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { State as UserState, user } from './user';
import { blogs, State as BlogsState } from './blogs';
import { blogShell, State as BlogShellState } from './blogShell';
import { registration, State as RegisterState } from './registration';
import { notifications, State as NotificationsState } from './notifications';
import { loginShell, State as LoginShellState } from './loginShell';
import { shell, State as ShellState } from './shell';
import { State as UserAccountSettingsState, userAccountSettings } from './userAccountSettings';

interface StoreEnhancerState {
}

export interface RootState extends StoreEnhancerState {
    router: RouterState;
    user: UserState;
    blogs: BlogsState;
    blogShell: BlogShellState;
    registration: RegisterState;
    loginShell: LoginShellState;
    shell: ShellState;
    notifications: NotificationsState;
    userAccountSettings: UserAccountSettingsState;
}

export default combineReducers({
    router,
    user,
    blogs,
    blogShell,
    registration,
    loginShell,
    shell,
    notifications,
    userAccountSettings
});