import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setRememberMe } from "../../../store/reducers";
import { RootState } from "../../../store";

import { Input, Button } from "../../../components/atoms";

import {
	formTitle,
	formButtons,
	formDescription,
	forgotPassword,
	formFooter,
	secondFormTitle,
	socialButtons,
	rememberMe as rememberMeText,
} from "../../../constants/login";
import { toast } from "../../../utils/toast";

export default function FormSection() {
	const { email, password, rememberMe, error } = useSelector(
		(state: RootState) => state.form
	);

	const [toggleIcon, setToggleIcon] = useState(false);

	const dispatch = useDispatch();

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { name, value },
		} = e;

		if (name === "email") {
			dispatch(setEmail(value));
		} else if (name === "password") {
			dispatch(setPassword(value));
		}
	};

	const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const inputs = [email, password];
		const username = email.split("@")[0];

		if (inputs.includes("")) {
			return toast("Please fill in all fields!", "static");
		} else if (error.email || error.password) {
			return toast("Invalid Email or Password", "static");
		}

		toast(`Logged In, Hello ${username}! 🎉`);
	};

	return (
		<section className="block w-full md:flex md:w-[40%] items-center justify-center flex-col md:p-10">
			{/* header */}
			<div className="space-y-2 w-full">
				<h1 className="font-bold text-[32px]">{formTitle}</h1>
				<p>{formDescription}</p>
			</div>

			<div className="w-full pt-7">
				<h2 className="font-semibold text-2xl">{secondFormTitle}</h2>

				<div className="py-4">
					<form onSubmit={onFormSubmit} className="flex gap-6 flex-col">
						<Input
							type="text"
							label="Email"
							placeholder="Enter your email"
							value={email}
							name="email"
							onChange={onInputChange}
						/>
						{error.email && <span className="text-red-500">Invalid Email</span>}
						<Input
							type={toggleIcon ? "text" : "password"}
							label="Password"
							placeholder="Enter your password"
							withIcon
							onIconClicked={() => setToggleIcon(!toggleIcon)}
							toggleIcon={toggleIcon}
							value={password}
							name="password"
							onChange={onInputChange}
						/>
						{error.password && (
							<span className="text-red-500">
								Password need to be 8 characters
							</span>
						)}

						{/* remember me */}
						<div className="flex justify-between">
							<div className="flex items-center gap-2">
								<input
									type="checkbox"
									checked={rememberMe}
									onChange={() => dispatch(setRememberMe())}
								/>
								<label>{rememberMeText}</label>
							</div>

							<div>
								<a href="#" className="hover:underline">
									{forgotPassword}
								</a>
							</div>
						</div>

						{/* submit button */}
						<div className="flex gap-4">
							{formButtons.map((button, idx) => (
								<Button
									key={button.text}
									variant={button.variant as any}
									type={button.type as any}
								>
									{button.text}
								</Button>
							))}
						</div>

						{/* social login */}
						<div className="w-full pt-3 text-center space-y-3">
							<span>{formFooter}</span>
							<div className="flex gap-4">
								{socialButtons.map((social) => (
									<Button
										key={social.text}
										variant={social.variant as any}
										isSocial={social.isSocial}
									>
										<span className="font-light">{social.text}</span>
									</Button>
								))}
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
