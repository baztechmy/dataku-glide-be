// MODULES
import { Router } from 'express';

// CONTROLLERS
import {
    findLatestMonitorTankLogHandler
} from '../controllers/monitor-tank-log.controller';

// MIDDLEWARES
import Authorize from '../middlewares/authorization.middleware';

const latestMonitorTankLogRouter = Router();
latestMonitorTankLogRouter.use(Authorize.accesstoken);

latestMonitorTankLogRouter.route('/')
    .get(findLatestMonitorTankLogHandler);

export default latestMonitorTankLogRouter;
