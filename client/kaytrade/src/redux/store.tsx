import { configureStore } from "@reduxjs/toolkit";
import reduxStorage from "./storage"; // Ensure reduxStorage has the correct typing
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
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: reduxStorage,
  blacklist: [], // Add slices to exclude from persistence
  whitelist: ["user", "theme"], // Add slices to include in persistence
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor for handling rehydration
export const persistor = persistStore(store);

// Define types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
