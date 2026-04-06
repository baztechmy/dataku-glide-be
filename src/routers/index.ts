import { Router } from "express";
import userRouter from "./user.router";
import monitorTankRouter from "./monitor-tank.router";

const router = Router();

router.use('/api/users', userRouter);
router.use('/api/monitor-tanks', monitorTankRouter);

export default router;
