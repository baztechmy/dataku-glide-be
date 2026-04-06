import { Router } from 'express';
import {
    createMonitorTankLogHandler,
    findAllMonitorTankLogHandler,
    deleteMonitorTankLogHandler,
    findAllMonitorTankLogByDateHandler
} from '../controllers/monitor-tank-log.controller';

const monitorTankLogRouter = Router();

monitorTankLogRouter.route('/')
    .post(createMonitorTankLogHandler)
    .get(findAllMonitorTankLogHandler);
monitorTankLogRouter.route('/:mtl_id')
    .delete(deleteMonitorTankLogHandler);
monitorTankLogRouter.route('/date/:mtl_year/:mtl_month')
    .get(findAllMonitorTankLogByDateHandler)

export default monitorTankLogRouter;
