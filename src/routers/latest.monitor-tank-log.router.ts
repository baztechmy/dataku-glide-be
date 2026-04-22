// MODULES
import { Router } from 'express';

// CONTROLLERS
import {
    findAllLatestMonitorTankLogHandler
} from '../controllers/monitor-tank-log.controller';

const latestMonitorTankLogRouter = Router();

latestMonitorTankLogRouter.route('/')
    .get(findAllLatestMonitorTankLogHandler);

export default latestMonitorTankLogRouter;
