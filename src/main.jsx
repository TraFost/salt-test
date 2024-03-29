import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./store";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ToastContainer stacked />
			<App />
		</Provider>
	</React.StrictMode>
);
