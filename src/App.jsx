import { useState } from "react";

import { Input, Button } from "./components/atoms";
import * as constants from "./constants/login";

function App() {
	const [toggleIcon, setToggleIcon] = useState(false);

	const test = constants.heroTitle.split(" ");

	return (
		<main className="flex h-screen">
			<div className="w-full pt-[83px] px-6 flex flex-col md:flex-row md:p-0 h-full">
				{/* hero */}
				<section className="hidden bg-[#7879F1] h-full w-fit md:flex-1 md:grid place-items-center">
					<div className="bg-[#FFFFFF66] w-[650px] h-[530px] flex flex-col justify-center space-y-8 pl-20">
						{/* hero-header */}
						<h3 className="text-5xl text-white font-semibold">
							{test[0]} {test[1]}
							<br />
							{test[2]} {test[3]}
							<br />
							{test[4]}
							<br />
							<span className="text-black">{test[5]}</span>
						</h3>

						{/* hero-content */}
						<p className="max-w-sm">{constants.heroDescription}</p>
					</div>
				</section>

				{/* form */}
				<section className="block flex-[0.4] md:flex items-center justify-center flex-col md:p-32">
					{/* header */}
					<div className="space-y-2 w-full">
						<h1 className="font-bold text-[32px]">{constants.formTitle}</h1>
						<p>{constants.formDescription}</p>
					</div>

					<div className="w-full pt-7">
						<h2 className="font-semibold text-2xl">
							{constants.secondFormTitle}
						</h2>

						<div className="py-4">
							<form className="flex gap-6 flex-col">
								<Input
									type="email"
									label="Email"
									placeholder="Enter your email"
								/>
								<Input
									type={toggleIcon ? "text" : "password"}
									label="Password"
									placeholder="Enter your password"
									withIcon
									onIconClicked={() => setToggleIcon(!toggleIcon)}
									toggleIcon={toggleIcon}
								/>

								{/* remember me */}
								<div className="flex justify-between">
									<div className="flex items-center gap-2">
										<input type="checkbox" />
										<label>{constants.rememberMe}</label>
									</div>

									<div>
										<a href="#" className="hover:underline">
											{constants.forgotPassword}
										</a>
									</div>
								</div>

								{/* submit button */}
								<div className="flex gap-4">
									{constants.formButtons.map((button) => (
										<Button
											key={button.text}
											type={button.type}
											variant={button.variant}
										>
											{button.text}
										</Button>
									))}
								</div>

								{/* social login */}
								<div className="w-full pt-3 text-center space-y-3">
									<span>{constants.formFooter}</span>
									<div className="flex gap-4">
										{constants.socialButtons.map((social) => (
											<Button
												key={social.text}
												type={social.type}
												variant={social.variant}
												isSocial={social.isSocial}
											>
												{social.text}
											</Button>
										))}
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
