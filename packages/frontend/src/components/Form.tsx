// @react
import React, { useState } from "react";

// @axios
import { CarrierAPI } from "../apis";

// @mui
import {
	Button,
	TextField,
	Box,
	Typography,
	Container,
	Paper,
	Card,
	CardActionArea,
	CardContent,
} from "@mui/material";
import { Grid } from "@material-ui/core";

export interface Validation {
	result: string;
	message: string;
}

/**
 * @function Form
 * @description Form for inputting user credentials and submitting to see if credentials are valid.
 * @returns React
 */
export const Form = () => {
	// Keep track of a validation object using local state
	const [validation, setValidation] = useState<null | Validation>(null);

	// Submission handler
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const request = {
			email: data.get("email"),
			password: data.get("password"),
			name: data.get("name"),
			username: data.get("username"),
		};

		if (!request.password) {
			setValidation({ result: "Error", message: "Missing Password" });
			return;
		}

		if (
			[request.email, request.name, request.username].filter((x) => x)
				.length === 0
		) {
			setValidation({
				result: "Error",
				message: "Need at least one of email, name, or username",
			});
			return;
		}

		const validation = await CarrierAPI.post(
			`http://localhost:5001/api/carrier/${1}`,
			request
		);
	};

	// JSX
	return (
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
					Validate Credentials
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1, width: 320 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						id="name"
						label="Name"
						name="name"
						autoComplete="name"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Check Credentials
					</Button>

					{/* Credential check outcome */}
					{validation && (
						<Paper>
							<Grid item md={3}>
								<CardContent>
									<Typography variant="h5" component="div">
										{validation.result}
									</Typography>
									<Typography
										sx={{ fontSize: 14 }}
										color="text.secondary"
										gutterBottom
									>
										{validation.message}
									</Typography>
								</CardContent>
							</Grid>
						</Paper>
					)}
				</Box>
			</Box>
		</Container>
	);
};
