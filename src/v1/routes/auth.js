import { Router } from "express";
import {
  signInController,
  signUpController
} from "../controllers/usersController";
import catchInputError from "../validators/rules";
import { signUpRules } from "../validators/rules/userInputRules";
import { fiveHundredHandler } from "../middleware/errorHandler";
import { checkUserConflict } from "../validators/userConflict";
import passport from "passport";

const router = Router();
router.post(
  "/signin",
  passport.authenticate("local"),
  fiveHundredHandler(signInController)
);
router.post(
  "/signup",
  signUpRules(),
  catchInputError,
  checkUserConflict,
  fiveHundredHandler(signUpController)
);
export default router;
