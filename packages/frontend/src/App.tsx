// @css
import "./App.css";

// @react
import React, { Fragment } from "react";

// @views
import { MainView } from "./views";

// @components
import { Header, Footer } from "./components";

/**
 * App is the basic component that holds the views and components
 * @returns React
 */
export const App = () => (
	<Fragment>
		<Header />
		<MainView />
		<Footer />
	</Fragment>
);
