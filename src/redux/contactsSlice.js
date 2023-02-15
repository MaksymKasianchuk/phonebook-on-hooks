import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contactList: [],
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contactList.push(action.payload);
            },
            prepare({name, phone}) {
                return {
                    payload: {
                        name,
                        phone,
                        id: nanoid()
                    },
                };
            },
        },
       
        deleteContact(state, action){
            return {
                contactList: state.contactList.filter(contact => contact.id !== action.payload)
            }
        }
    }
});

const persistConfig = {
    key: 'contacts',
    storage
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;