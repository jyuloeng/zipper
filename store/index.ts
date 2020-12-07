import {
  createStore,
  AnyAction,
  applyMiddleware,
  CombinedState,
  Store,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { IAppState, reducer } from "./reducers/index";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store: Store<CombinedState<IAppState>, AnyAction> = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
