// MODULES
import { Router } from 'express';

// CONTROLLERS
import {
    createMonitorTankHandler,
    findMonitorTankHandler,
    findAllMonitorTankHandler,
    updateMonitorTankHandler,
    deleteMonitorTankHandler
} from '../controllers/monitor-tank.controller';

// MIDDLEWARES
import Authorize from '../middlewares/authorization.middleware';

const monitorTankRouter = Router();

monitorTankRouter.route('/')
    .post(Authorize.accesstoken, createMonitorTankHandler)
    .get(findAllMonitorTankHandler);
monitorTankRouter.route('/:mt_id')
    .get(findMonitorTankHandler)
    .patch(Authorize.accesstoken, updateMonitorTankHandler)
    .delete(Authorize.accesstoken, deleteMonitorTankHandler);

export default monitorTankRouter;
