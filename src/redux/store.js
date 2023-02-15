import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    REGISTER,
    PERSIST,
    PURGE,
} from 'redux-persist';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer
    },
    middleware(getDefaultMiddleware){
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [ FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE],
            },
        });
    },
});

export const persistor = persistStore(store);