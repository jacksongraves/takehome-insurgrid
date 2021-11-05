import { webkit } from "playwright";
import { Validation } from ".";

/**
 * @function validateProgressive
 * @description Attempts to validate the user credentials for the Progressive workflow
 * @param username String corresponding to the User ID
 * @param password user's password
 * @throws {Error}
 * @returns {void}
 */
export const validateProgressive = async (
	username: string,
	password: string
): Promise<Validation> => {
	console.log("Attempting to validate Progressive");
	console.log(`User ID: ${username} Password: ${password}`);

	try {
		// Perform the Progressive authentication flow with Playwright
		const browser = await webkit.launch({ timeout: 10000 });
		const page = await browser.newPage();
		await page.goto(
			"https://account.apps.progressive.com/access/login?cntgrp=A"
		);
		await page.fill(
			'input[formcontrolname="userName"][data-pgr-id="inputUserName"]',
			username
		);
		await page.fill(
			'input[formcontrolname="password"][data-pgr-id="inputPassword"]',
			password
		);
		await page.click('button[data-pgr-id="buttonSubmitLogin"]');

		// This does not actually... work. Maybe has something to do with the glob patterns, but whatever is passed into the function is not properly comparing against this URL.
		// The text click is a fallback instead of proper URL navigation.
		await page.waitForLoadState("networkidle");
		// await page.waitForNavigation({ url: "https://policyservicing.apps.progressive.com/app/account-home?brand=Progressive" })
		await page.click("text=We're here to protect", { timeout: 10000 });
		await browser.close();

		return {
			result: "success",
			message: "Authenticated with Progressive",
		};
	} catch (error: unknown) {
		console.log("ERROR authenticating Progressive");
		// throw error || "Unknown error";
		return {
			result: "error",
			message: String(error),
		};
	}
};
