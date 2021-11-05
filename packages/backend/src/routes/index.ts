/* ---------------------------- Controller Index ---------------------------- */
// Consolidate and export all controllers in order to simplify future imports.

// @express
import { Router } from "express";

// @routes
import carrierRoutes from "./carrierRoutes";

// Configure a router for our base route
// NOTE Passing in additional routers from the relative Routes files as a router.use()
const router = Router();

// Specify all routes
router.use("/carrier", carrierRoutes);

/**
 * TODO
 * Call any special requests that our API needs to make before clients can access it namely, accessing client IDs or configuration files for databases, payment systems, etc.
 */

// FIXME Shouldn't use default in TypeScript
export default router;
