/* --------------------------- Router --------------------------- */

// @express
import { Router } from "express";
import { getCarriers, validateCredentials } from "../controllers";

// TODO @middlewares
// TODO @controllers

// Configure a router
const router = Router();

router.route("/").get(getCarriers);

router.route("/:carrier_id").post(validateCredentials);

// FIXME Shouldn't use default in TypeScript
export default router;
