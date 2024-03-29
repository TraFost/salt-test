import React from "react";

import { heroDescription, heroTitle } from "../../../constants/login";

export default function Hero() {
	const splittedHeroTitle = heroTitle.split(" ");

	return (
		<section className="hidden bg-[#7879F1] w-full h-screen md:w-[60%] md:grid place-items-center">
			<div className="bg-[#FFFFFF66] flex flex-col justify-center space-y-8 p-20">
				{/* hero-header */}
				<h3 className="text-5xl text-white font-semibold">
					{splittedHeroTitle[0]} {splittedHeroTitle[1]}
					<br />
					{splittedHeroTitle[2]} {splittedHeroTitle[3]}
					<br />
					{splittedHeroTitle[4]}
					<br />
					<span className="text-black">{splittedHeroTitle[5]}</span>
				</h3>

				{/* hero-content */}
				<p className="max-w-sm">{heroDescription}</p>
			</div>
		</section>
	);
}
