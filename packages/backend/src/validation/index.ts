import { validateGeico } from "./geico";
import { validateLemonade } from "./lemonade";
import { validateNationwide } from "./nationwide";
import { validateProgressive } from "./progressive";
import { validateUSAA } from "./usaa";
import { validateStateFarm } from "./statefarm";
import { validateLibertyMutual } from "./libertymutual";

export interface Validation {
	result: string;
	message: string;
}

export interface Credentials {
	password: string;
	email: string;
	name?: string;
	username?: string;
}

export const validate = (
	carrierId: number,
	credentials: Credentials
): Validation => {
	// Create a pointer for validation outcome
	const validation = {
		result: "",
		message: "",
	};

	// Destructure credentials for ease of access per validation function
	const { password, email, name, username } = credentials;

	// Handle the validation per the type of carrier being validated against
	try {
		switch (carrierId) {
			case 1:
				if (username) {
					validateProgressive(username, password);
				} else {
					throw "Username not provided";
				}
				break;
			default:
				break;
		}
	} catch (error: unknown) {
		validation.message = `${error}`;
		validation.result = "error";
	}

	return validation;
};
