// @react
import React, { Fragment } from "react";

// @mui
import {
	Container,
	Grid,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Box,
	Button,
	Divider,
	ListItemText,
	MenuItem,
	MenuList,
	Paper,
} from "@mui/material";

export interface Carrier {
	name: string;
	id: number;
	image: string;
	login: string;
}

// Temporary data until connected to API
const carriers: Carrier[] = [
	{
		name: "Progressive",
		id: 1,
		image: "",
		login: "https://account.apps.progressive.com/access/login?cntgrp=A",
	},
	{
		name: "State Farm",
		id: 2,
		image: "",
		login: "https://www.statefarm.com/",
	},
	{
		name: "Geico",
		id: 3,
		image: "",
		login: "https://ecams.geico.com/login",
	},
	{
		name: "Liberty Mutual",
		id: 4,
		image: "",
		login: "https://eservice.libertymutual.com/login/",
	},
	{
		name: "Lemonade",
		id: 5,
		image: "",
		login: "https://www.lemonade.com/login#email",
	},
	{
		name: "USAA",
		id: 6,
		image: "",
		login:
			"https://www.usaa.com/my/logon?logoffjump=true&wa_ref=pub_global_log_on",
	},
	{
		name: "Nationwide",
		id: 7,
		image: "",
		login: "https://www.nationwide.com/personal/login",
	},
];

/**
 * @function List
 * @description Provides a control to retrieve carriers, displays an empty list if none retrieved / none available, and if carriers are present, populates the list with click handlers.
 * @returns React
 */
export const List = () => {
	const onClick = (id: number) => {
		console.log("noOp", id);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("noOp");
	};

	const menuItems = (items: Carrier[]) =>
		items.map(({ name, id }: Carrier) => {
			return (
				<MenuItem
					sx={{ p: 3 }}
					key={Math.random()}
					onClick={(e) => onClick(id)}
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
						onSubmit={handleSubmit}
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
						<Paper>
							<MenuList>{menuItems(carriers)}</MenuList>
						</Paper>
					</Box>
				</Box>
			</Container>
		</Fragment>
	);
};
