import { Router } from "express";
import {
  getUsersController,
  getUserController
} from "../controllers/usersController";
import { fiveHundredHandler } from "../middleware/errorHandler";
import { verifyToken } from "../helpers/jwtAuth";

const router = Router();

router.get("/:userId", verifyToken, fiveHundredHandler(getUserController));
router.get("/", verifyToken, fiveHundredHandler(getUsersController));
export default router;
