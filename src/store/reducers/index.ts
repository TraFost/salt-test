import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IForm {
	email: string;
	password: string;
	rememberMe: boolean;
	error: {
		email: boolean;
		password: boolean;
	};
}

const initialState: IForm = {
	email: "johndoe@test.com",
	password: "johndoe",
	rememberMe: true,
	error: {
		email: false,
		password: false,
	},
};

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setEmail(state, action: PayloadAction<string>) {
			const emailRegexValidation =
				/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

			state.email = action.payload;
			state.error.email = !emailRegexValidation.test(action.payload);
		},
		setPassword(state, action: PayloadAction<string>) {
			const passwordRegexValidation = /^(?=.*[0-9a-zA-Z]).{8,}$/;

			state.password = action.payload;
			state.error.password = !passwordRegexValidation.test(action.payload);
		},
		setRememberMe(state) {
			state.rememberMe = !state.rememberMe;
		},
	},
});

export const { setEmail, setPassword, setRememberMe } = formSlice.actions;
export default formSlice.reducer;
