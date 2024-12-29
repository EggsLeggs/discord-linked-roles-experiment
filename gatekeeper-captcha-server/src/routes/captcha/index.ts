import { Router } from "express";
import { verifyCaptcha } from "../../controllers/captcha";
import { isAuthenticated } from "../../utils/middlewares";
const router = Router();

router.get("/verify", isAuthenticated, verifyCaptcha);

export default router;
