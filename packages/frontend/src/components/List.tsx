// @react
import React, { Fragment, useState, useContext } from "react";

// @mui
import {
	Container,
	Typography,
	Box,
	Button,
	ListItemText,
	MenuItem,
	MenuList,
	Paper,
} from "@mui/material";
import { CarrierAPI } from "../apis";

// @context
import { CarrierContext } from "../views";

// @types
export interface Carrier {
	name: string;
	id: number;
	image: string;
	login: string;
}

/**
 * @function List
 * @description Provides a control to retrieve carriers, displays an empty list if none retrieved / none available, and if carriers are present, populates the list with click handlers.
 * @returns React
 */
export const List = (): JSX.Element => {
	// Make use of local state to keep track of carriers and which one is active
	const [carriers, setCarriers] = useState<Carrier[]>([]);
	// const [activeCarrier, setActiveCarrier] = useState<number | null>(null);
	const { carrier, setCarrier } = useContext(CarrierContext);

	// Retrieve an updated list of carriers
	const updateCarriers = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { data: _carriers } = await CarrierAPI.get<Carrier[]>("/");
		setCarriers(_carriers || []);
	};

	// When a carrier is selected, set it to active
	const onClick = (id: number) => setCarrier(id);

	// List renderer to aid in uniquely rendering carriers
	const menuItems = (items: Carrier[]) =>
		items.map(({ name, id }: Carrier) => {
			return (
				<MenuItem
					sx={{ p: 3 }}
					key={Math.random()}
					onClick={() => onClick(id)}
					style={{
						backgroundColor: carrier === id ? "#ddd" : "",
					}}
				>
					<ListItemText>{id}</ListItemText>
					<ListItemText>{name}</ListItemText>
				</MenuItem>
			);
		});

	// JSX
	return (
		<Fragment>
			<Container component="main" maxWidth="xs">
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Insurance Carriers
					</Typography>

					<Box
						component="form"
						onSubmit={updateCarriers}
						noValidate
						sx={{ width: 320 }}
					>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Update Carrier List
						</Button>
						{carriers.length ? (
							<Paper>
								<MenuList>{menuItems(carriers)}</MenuList>
							</Paper>
						) : (
							""
						)}
					</Box>
				</Box>
			</Container>
		</Fragment>
	);
};
