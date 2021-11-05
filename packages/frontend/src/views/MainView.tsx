// @css
import "./MainView.css";

// @react
import React, { Fragment, createContext, useState } from "react";

// @mui
import { Box } from "@mui/material";
import { Grid } from "@material-ui/core";

//
// For sharing selected carrier between the sibling List & Form
const initialContext: {
	carrier: number | null;
	setCarrier: React.Dispatch<React.SetStateAction<number | null>>;
} = {
	carrier: null,
	setCarrier: () => {
		/* set state */
	},
};
export const CarrierContext = createContext(initialContext);

// @components
import { Form, List } from "../components";
/**
 * @function MainView
 * @description The main body view for the app
 * @returns React
 */
export const MainView = (): JSX.Element => {
	const [carrier, setCarrier] = useState<number | null>(null);
	return (
		<CarrierContext.Provider value={{ carrier, setCarrier }}>
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
		</CarrierContext.Provider>
	);
};
