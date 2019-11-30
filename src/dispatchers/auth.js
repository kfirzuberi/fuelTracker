
import actions from '../actions/auth';
import { signIn, signOut, signUp, watchAuthStateChanged } from "../services/authService";


export const signInDispatcher = userData => {
    return async dispatch => {
        const { email, password } = userData;
        try {
            await signIn(email, password)
            dispatch(actions.signIn(userData));
        } catch (error) {
            console.log(error);
        }
    }
};

export const signOutDispatcher = () => {
    return async dispatch => {
        try {
            await signOut()
            dispatch(actions.signOut());
        } catch (error) {
            console.log(error);
        }
    }
};

export const signUpDispatcher = userData => {
    return async dispatch => {
        const { email, password } = userData;
        
        try {
            console.log('signUpDispatcher', email, password)
            await signUp(email, password)
            dispatch(actions.signUp());
        } catch (error) {
            console.log(error);
        }
    }
};

export const watchAuthStateChangedDispatcher = () => {
    return dispatch => {
        watchAuthStateChanged(user => {
            dispatch(actions.authStateChanged({ loading: false, user }));
        });
    }
};