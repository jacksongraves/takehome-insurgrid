import { validateGeico } from "./geico";
import { validateLemonade } from "./lemonade";
import { validateNationwide } from "./nationwide";
import { validateProgressive } from "./progressive";
import { validateUSAA } from "./usaa";
import { validateStateFarm } from "./statefarm";
import { validateLibertyMutual } from "./libertymutual";

export type Result = "error" | "success";

export interface Validation {
	result: Result;
	message: string;
}

export interface Credentials {
	password: string;
	email?: string;
	name?: string;
	username?: string;
}

/**
 * @function validate
 * @description Attempts to validate a user's credentials against a specified carrier; routes the credentials to an appropriate validation workflow based on the target carrier (by id)
 * @param carrierId A unique carrier identifier that we can associate with a validation workflow
 * @param credentials User supplied credentials
 * @param credentials.password A user password, strictly required
 * @param credentials.email A user email, optional
 * @param credentials.name A user's name, optional
 * @param credentials.username A user's username, optional
 * @returns A validation object indicating success or error, and any useful debug message
 */
export const validate = async (
	carrierId: number,
	credentials: Credentials
): Promise<Validation> => {
	// Create a pointer for validation outcome
	let validation: Validation = {
		result: "success",
		message: "",
	};

	// Destructure credentials for ease of access per validation function
	const { password, email, name, username } = credentials;

	// Handle the validation per the type of carrier being validated against
	try {
		switch (carrierId) {
			case 1:
				if (username && password) {
					validation = await validateProgressive(username, password);
				} else {
					throw "Username and / or password not provided";
				}
				break;
			case 2:
				validateStateFarm();
				break;
			case 3:
				validateGeico();
				break;
			case 4:
				validateLibertyMutual();
				break;
			case 5:
				validateLemonade();
				break;
			case 6:
				validateUSAA();
				break;
			case 7:
				validateNationwide();
				break;
			default:
				throw "Unknown carrier id";
				break;
		}
	} catch (error: unknown) {
		validation.message = `${error}`;
		validation.result = "error";
	}

	return validation;
};
