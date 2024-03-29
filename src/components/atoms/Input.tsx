import React, { useState } from "react";
import { IconEyeOff, IconEye } from "@tabler/icons-react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	withIcon?: boolean;
	onIconClicked?: () => void;
	toggleIcon?: boolean;
}

export default function Input({
	label,
	withIcon = false,
	toggleIcon = false,
	onIconClicked,
	...props
}: IInput) {
	const renderIcon = () => {
		if (withIcon) {
			return toggleIcon ? (
				<IconEye className="text-[#2C1F3D]" size={23} />
			) : (
				<IconEyeOff size={23} className="text-[#2C1F3D]" />
			);
		}
		return null;
	};

	return (
		<div className={withIcon ? "relative" : "block"}>
			<label
				htmlFor="UserEmail"
				className="block text-sm font-medium text-gray-700"
			>
				{label}
			</label>
			<input
				{...props}
				className="mt-1.5 p-4 w-full rounded-lg border-[#3E334E99] border shadow-sm sm:text-sm focus:ring-[#3E334E99] focus:border-[#3E334E99] focus:ring-1 focus:outline-none focus:ring-opacity-50"
			/>
			<span
				onClick={onIconClicked}
				className="absolute right-0 bottom-5 grid w-10 place-content-center text-gray-500"
			>
				{renderIcon()}
			</span>
		</div>
	);
}
