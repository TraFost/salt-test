import React from "react";
import { IconLoader2 } from "@tabler/icons-react";

interface ILoader {
	isLoading: boolean;
	size?: number;
}

export default function Loader({ size = 35, isLoading }: ILoader) {
	return (
		<div className={`flex items-center justify-center animate-spin`}>
			{isLoading && <IconLoader2 size={size} strokeWidth={1.5} />}
		</div>
	);
}
