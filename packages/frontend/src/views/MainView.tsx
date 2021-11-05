// @css
import "./MainView.css";

// @react
import React, { Fragment } from "react";

// @mui
import { Box } from "@mui/material";

// @components
import { Form, List } from "../components";
/**
 * @function MainView
 * @description The main body view for the app
 * @returns React
 */
export const MainView = () => {
	return (
		<Fragment>
			<Box sx={{ width: "100%" }}>
				<List />
				<Form />
				{/* <CarrierList /> */}
			</Box>
		</Fragment>
	);
};
