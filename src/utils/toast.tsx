import { toast as notification } from "react-toastify";

export const toast = (message: string, mode: "async" | "static" = "async") => {
	if (mode === "static") {
		notification.error(message);
		return;
	}

	const id = notification.loading("Loading...");
	setTimeout(() => {
		notification.update(id, {
			render: message,
			type: "success",
			isLoading: false,
			autoClose: 2000,
		});
	}, 2000);
};
