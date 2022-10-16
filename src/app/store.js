import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "../reducers/alertSlice";
import loginSlice from "../reducers/loginSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  login: loginSlice,
  newAlert: alertSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
// export default configureStore({
//   reducer: {
//     newAlert: alertSlice,
//     login: loginSlice,
//   },
// });
