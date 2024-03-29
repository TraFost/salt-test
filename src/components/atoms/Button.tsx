import React from "react";
import Loader from "./Loader";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	isSocial?: boolean;
	loading?: boolean;
}

export default function Button({
	children,
	variant,
	isSocial,
	loading = false,
	...props
}: IButton) {
	const selectedVariant: any = {
		primary:
			"bg-[#7879F1] p-2 rounded-lg text-white font-semibold shadow-sm hover:bg-[#5F60E2] focus:outline-none focus:ring-2 focus:ring-[#5F60E2] focus:ring-opacity-50",
		secondary:
			"bg-white border-[#2C1F3D] border p-2 rounded-lg font-semibold shadow-sm hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#2C1F3D] focus:ring-opacity-50",
	};

	return (
		<button
			{...props}
			disabled={loading}
			className={`w-full ${isSocial ? "text-sm border-[#AFA2C3]" : "text-base"} 
			${loading ? "opacity-70 cursor-not-allowed" : ""}
			${selectedVariant[variant!]}`}
		>
			{loading ? <Loader isLoading={loading} /> : children}
		</button>
	);
}
