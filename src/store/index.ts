import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./reducers";

export const store = configureStore({
	reducer: {
		form: FormReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
