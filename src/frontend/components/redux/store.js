// import {configureStore, combineReducers} from "@reduxjs/toolkit"
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"
import userReducer from "./userRedux"
//from https://redux-toolkit.js.org/usage/usage-guide
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }

// const rootReducer = combineReducers({user: userReducer, cart: cartReducer})

// const persistedReducer = persistReducer(persistConfig, rootReducer)

//global store

export const store = configureStore({
  // reducer takes the current state and an action, and returns a new state based on the action type.
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },


})




// export const store = configureStore({
//   // reducer takes the current state and an action, and returns a new state based on the action type.
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// export let persistor = persistStore(store)
