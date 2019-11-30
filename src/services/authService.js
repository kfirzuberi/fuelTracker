import auth from '@react-native-firebase/auth';

export async function signUp(email, password) {
    return await auth().createUserWithEmailAndPassword(email, password);
}

export async function signIn(email, password) {
    return await auth().signInWithEmailAndPassword(email, password);
}

export async function signOut() {
    return await auth().signOut();
}

export function watchAuthStateChanged(callback) {
    return auth().onAuthStateChanged(callback);
};