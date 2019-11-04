
import actions from '../actions/auth';
import NavigationService from '../services/navigationService';

export const signInDispatcher = userData => {
    return dispatch => {
        const { email, password } = userData;
        dispatch(actions.signIn(userData));
        NavigationService.navigate("SignedIn");
    }
};

export const signOutDispatcher = () => {
    return dispatch => {
        NavigationService.navigate("SignedOut");
        dispatch(actions.signOut());
    }
};

export const watchAuthStateChangedDispatcher = () => {
    return dispatch => { }
};