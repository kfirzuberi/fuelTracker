import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'], // Whitelist (Save Specific Reducers)
    blacklist: [], // Blacklist (Don't Save Specific Reducers)
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(createLogger(), thunkMiddleware),
);
let persistor = persistStore(store);

export {
    store,
    persistor,
};