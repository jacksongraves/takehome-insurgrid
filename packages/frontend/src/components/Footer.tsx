// @react
import React from "react";

// @mui
import { Typography, Container, Link, Box } from "@mui/material";

/**
 * @function Footer
 * @description A footer component with a ref to email me if questions
 * @returns React
 */
export const Footer = (): JSX.Element => {
	return (
		<Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
			<Container maxWidth="lg">
				<Typography variant="body2" color="text.secondary" align="center">
					{"Copyright © "}
					<Link color="inherit" href="mailto:jackson.graves@me.com">
						Jackson Graves
					</Link>{" "}
					{new Date().getFullYear()}
				</Typography>
			</Container>
		</Box>
	);
};
