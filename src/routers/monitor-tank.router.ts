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
monitorTankRouter.use(Authorize.accesstoken);

monitorTankRouter.route('/')
    .post(createMonitorTankHandler)
    .get(findAllMonitorTankHandler);
monitorTankRouter.route('/:mt_id')
    .get(findMonitorTankHandler)
    .patch(updateMonitorTankHandler)
    .delete(deleteMonitorTankHandler);

export default monitorTankRouter;
