// @react
import React from "react";

// @mui
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

/**
 * @function Header
 * @description A basic Material UI header adapted from MUI <AppBar />
 */
export const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="default" elevation={0}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						InsurGrid Take Home Assignment
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
