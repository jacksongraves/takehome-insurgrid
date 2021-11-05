/* ------------------------- /project Controller ------------------------- */
// Specifies functional controllers and notional business logic for the /project
// of endpoints, according to the OpenAPI 3.0.0 specification.

// @express
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

// @data[json]
// Import any required JSON models (TBD)

/**
 * GET /carrier
 * @throws {Error}
 * @return {Promise}
 */
export const getCarriers = expressAsyncHandler(
	async (req: Request, res: Response): Promise<void> => {
		// Logging flag for initially debugging the API
		console.log("GET /carrier");

		// try {
		const code: number = 200;
		const response: object = { message: "success" };

		res.status(code).json(response);
		// } catch (error) {
		// 	throw error;
		// }
	}
);
