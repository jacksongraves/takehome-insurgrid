/* ---------------------------- Controller Index ---------------------------- */
// Consolidate and export all controllers in order to simplify future imports.

// @express
import { Router } from "express";

// @routes
import carrierRoutes from "./carrierRoutes";

// Configure a router for our base route
// Passing in additional routers from the relative Routes files as a router.use()
const router = Router();

// Specify all routes
router.use("/carrier", carrierRoutes);

export default router;
