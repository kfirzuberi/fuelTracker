import types from '../actions/types';

const initialState = {
    loading: false,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_STATE_CHANGED:
            return {
                ...state,
                user: action.value.user,
                loading: action.value.loading,
            };

        default:
            return state;
    }
};

export default authReducer;