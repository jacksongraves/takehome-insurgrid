/* --------------------------- Router --------------------------- */

// @express
import { Router } from "express";

// @controllers
import { getCarriers, validateCredentials } from "../controllers";

// Configure a router
const router = Router();

router.route("/").get(getCarriers);

router.route("/:carrier_id").post(validateCredentials);

export default router;
