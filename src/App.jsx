import React, { useState } from "react";
import { Loader } from "./components/atoms";

function App() {
	// const [isLoading, setIsLoading] = useState(false);

	return (
		<main className="h-screen bg-red-500">
			<Loader isLoading={isLoading} />
		</main>
	);
}

export default App;
