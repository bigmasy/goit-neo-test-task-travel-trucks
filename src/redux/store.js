import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { campersReducer } from "./campers/slice";
import { favoritesReducer } from "./favourites/slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistedFavoritesReducer = persistReducer(
  {
    key: "favorites",
    storage,
    whitelist: ["favorites"],
  },
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    favorites: persistedFavoritesReducer,
    filters: filtersReducer,
    campers: campersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
