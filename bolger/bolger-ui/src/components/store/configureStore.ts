let envStore;

if (process.env.NODE_ENV === 'production') {
    envStore = require('./configureStore.prod');
} else {
    envStore = require('./configureStore.dev');
}

export const store: Function = envStore.default;