import { configureStore} from "@reduxjs/toolkit";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contacts/contactsSlice";
import { filtersReducer } from "./filter/filterSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./user/userSlice";
import persistStore from "redux-persist/es/persistStore";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] }

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
   middleware,
})

export const persistor = persistStore(store)