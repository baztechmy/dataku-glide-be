import { Router } from "express";
import userRouter from "./user.router";
import monitorTankRouter from "./monitor-tank.router";
import monitorTankLogRouter from "./monitor-tank-log.router";
import authenticationRouter from "./authentication.router";

const router = Router();

router.use('/auth', authenticationRouter)
router.use('/api/users', userRouter);
router.use('/api/monitor-tanks', monitorTankRouter);
router.use('/api/monitor-tank-logs', monitorTankLogRouter);

export default router;
