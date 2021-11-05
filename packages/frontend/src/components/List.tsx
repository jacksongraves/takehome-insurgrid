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
	const menuItems = (items: Carrier[]) =>
		items.map(({ name, id }: Carrier) => {
			return (
				<MenuItem key={Math.random()} onClick={(e) => onClick(id)}>
					<ListItemText>{id}</ListItemText>
					<ListItemText>{name}</ListItemText>
				</MenuItem>
			);
		});

	return (
		<Fragment>
			<Paper sx={{ width: 320, maxWidth: "100%" }}>
				<MenuList>{menuItems(carriers)}</MenuList>
			</Paper>
		</Fragment>
	);
};
