// MODULES
import { Router } from 'express';

// CONTROLLERS
import {
    findLatestMonitorTankLogHandler
} from '../controllers/monitor-tank-log.controller';

const latestMonitorTankLogRouter = Router();

latestMonitorTankLogRouter.route('/')
    .get(findLatestMonitorTankLogHandler);

export default latestMonitorTankLogRouter;
