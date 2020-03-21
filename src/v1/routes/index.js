import { Router } from "express";
import auth from "./auth";
import users from "./users";
import {fiveHundredHandler} from '../middleware/errorHandler'

const router = Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/error", fiveHundredHandler((req,res,next)=>{return rt+4}));

export default router;
