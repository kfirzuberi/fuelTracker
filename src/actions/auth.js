import types from './types';

const signUp = newUser => {
    return {
        type: types.SIGN_UP,
        value: newUser
    };
};

const signIn = user => {
    return {
        type: types.SIGN_IN,
        value: user
    };
};

const signOut = () => {
    return {
        type: types.SIGN_OUT,
    };
};

const authStateChanged = user => {
    return {
        type: types.AUTH_STATE_CHANGED,
        value: user
    };
};

export default {
    signUp,
    signIn,
    signOut,
    authStateChanged
}