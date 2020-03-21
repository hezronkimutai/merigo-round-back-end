import { Router } from "express";
import routes from "./routes";

const router = Router();

router.use("/v1", routes);

export default router;
