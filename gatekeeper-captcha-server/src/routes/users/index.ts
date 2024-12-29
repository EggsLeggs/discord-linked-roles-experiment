import { Router } from "express";
import { getUserController } from "../../controllers/users";
import { isAuthenticated } from "../../utils/middlewares";
const router = Router();

router.get("/", isAuthenticated, getUserController);

export default router;
