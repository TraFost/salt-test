import React from "react";

import Hero from "./Hero";
import FormSection from "./Form";

export default function LoginScreen() {
	return (
		<main className="flex h-screen overflow-y-none">
			<div className="w-full pt-[83px] px-6 flex flex-col md:flex-row md:p-0 h-full ">
				<Hero />
				<FormSection />
			</div>
		</main>
	);
}
