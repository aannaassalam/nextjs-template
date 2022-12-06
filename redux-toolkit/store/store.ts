import { configureStore } from "@reduxjs/toolkit";
import logInSlice from "@/reduxtoolkit/slices/userSlice";
import logger from "redux-logger";
// ...

export const store = configureStore({
  reducer: {
    loginReducer: logInSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
