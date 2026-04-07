// MODULES
import { Router } from 'express';

// CONTROLLERS
import {
    createMonitorTankLogHandler,
    findAllMonitorTankLogHandler,
    deleteMonitorTankLogHandler,
    findAllMonitorTankLogByDateHandler
} from '../controllers/monitor-tank-log.controller';

// MIDDLEWARES
import Authorize from '../middlewares/authorization.middleware';

const monitorTankLogRouter = Router();
monitorTankLogRouter.use(Authorize.accesstoken);

monitorTankLogRouter.route('/')
    .post(createMonitorTankLogHandler)
    .get(findAllMonitorTankLogHandler);
monitorTankLogRouter.route('/:mtl_id')
    .delete(deleteMonitorTankLogHandler);
monitorTankLogRouter.route('/date/:mtl_year/:mtl_month')
    .get(findAllMonitorTankLogByDateHandler)

export default monitorTankLogRouter;
