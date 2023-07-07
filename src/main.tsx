// Imports
import React from "react";
import ReactDOM from "react-dom/client";

// App
import App from "./App.tsx";

// Styles
import { GlobalStyle } from "./global/GlobalStyle.ts";

// Rendering
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);
