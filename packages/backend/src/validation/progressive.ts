import axios from "axios";

/**
 * @function validateProgressive
 * @description Attempts to validate the user credentials for the Progressive workflow
 * @param username String corresponding to the User ID
 * @param password user's password
 * @throws {Error}
 * @returns {void}
 */
export const validateProgressive = (username: string, password: string): void => {
	console.log("noOp");
	console.log("Attempting to validate Progressive");
	console.log(`User ID: ${username} Password: ${password}`);

	try {
		// TODO perform validation workflow
	} catch (error) {
		throw error?.message || error || "Unknown error";
	}
};
