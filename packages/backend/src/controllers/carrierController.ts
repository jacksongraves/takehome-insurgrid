/* ------------------------- /carrier Controller -------------------------- */
/**
 * Specifies functional controllers and notional business logic for the
 * /carrier family of endpoints, according to the OpenAPI 3.0.0 specification.
 */

// @express
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

// @data[json]
// Import any required JSON models (TBD)
import { Carrier } from "../data/Carriers";
import _carriers from "../data/carriers.json";
const carriers: Carrier[] = _carriers;

// @functions
// Import any custom functions and additional business logic better handled apart from API controllers and routes. May not be the most elegant pattern, but could help keep codebase cleaner with tons of unique authentication flows etc.
import { Credentials, validate, Validation } from "../validation";

/**
 * GET /carrier
 * @throws {Error}
 * @return {Promise}
 */
export const getCarriers = expressAsyncHandler(
	async (req: Request, res: Response): Promise<void> => {
		// Logging flag for initially debugging the API
		console.log("GET /carrier");

		const code: number = 200;
		const response: object = carriers;

		res.status(code).json(response);
	}
);

/**
 * POST /carrier/:carrier_id
 * @throws {Error}
 * @return {Promise}
 */
export const validateCredentials = expressAsyncHandler(
	async (req: Request, res: Response): Promise<void> => {
		// Logging flag for initially debugging the API
		console.log("POST /carrier/:carrier_id");

		// Extract the carrier_id from the request URL path, and coerce it to a Number
		const { carrier_id } = req.params;
		const carrierId: number = Number(carrier_id);
		if (!carriers.find((carrier: Carrier) => carrier.id === carrierId)) {
			throw "Unknown carrier_id";
		}

		// Extract the user credentials; this de / re structuring may be an antipattern, but could be refactored to force the API to throw an error before attempting to validate if the user has supplied incorrect data
		const { password, email, username, name }: Credentials = req.body;
		const credentials: Credentials = { password, email, username, name };
		if (!password) {
			throw "Missing password";
		}
		if ([email, username, name].filter((x) => x).length === 0) {
			throw "Missing at least one of email, username, name";
		}

		// Attempt to validate the user credentials
		const { result, message } = await validate(carrierId, credentials);

		// Check if an application error was received
		const code: number = 200;
		// if (result === "error") {
		// 	code = 400;
		// }

		// Send the response to the user
		const response: Validation = { result, message };
		res.status(code).json(response);
	}
);
