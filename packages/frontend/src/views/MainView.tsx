// @css
import "./MainView.css";

// @react
import React, { Fragment } from "react";

// @mui
import { Box } from "@mui/material";
import { Grid } from "@material-ui/core";

// @components
import { Form, List } from "../components";
/**
 * @function MainView
 * @description The main body view for the app
 * @returns React
 */
export const MainView = (): JSX.Element => {
	return (
		<Fragment>
			<Box sx={{ width: "100%" }}>
				<Grid container justifyContent="center" spacing={10}>
					<Grid item md={3}>
						<List />
					</Grid>
					<Grid item md={3}>
						<Form />{" "}
					</Grid>{" "}
				</Grid>
				{/* <CarrierList /> */}
			</Box>
		</Fragment>
	);
};
