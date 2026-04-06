import { Router } from 'express';
import {
    createMonitorTankHandler,
    findMonitorTankHandler,
    findAllMonitorTankHandler,
    updateMonitorTankHandler,
    deleteMonitorTankHandler
} from '../controllers/monitor-tank.controller';

const monitorTankRouter = Router();

monitorTankRouter.route('/')
    .post(createMonitorTankHandler)
    .get(findAllMonitorTankHandler);
monitorTankRouter.route('/:mt_id')
    .get(findMonitorTankHandler)
    .patch(updateMonitorTankHandler)
    .delete(deleteMonitorTankHandler);

export default monitorTankRouter;
