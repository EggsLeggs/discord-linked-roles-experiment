import { Router } from "express";
import authRouter from "./auth";
import usersRouter from "./users";
import captchaRouter from "./captcha";

const router = Router();
// console log all requests
router.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/captcha", captchaRouter);

export default router;
