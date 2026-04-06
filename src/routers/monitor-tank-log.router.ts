import { Router } from 'express';
import {
    createMonitorTankLogHandler,
    findAllMonitorTankLogHandler,
    deleteMonitorTankLogHandler
} from '../controllers/monitor-tank-log.controller';

const monitorTankLogRouter = Router();

monitorTankLogRouter.route('/')
    .post(createMonitorTankLogHandler)
    .get(findAllMonitorTankLogHandler);
monitorTankLogRouter.route('/:mt_id')
    .delete(deleteMonitorTankLogHandler);

export default monitorTankLogRouter;
