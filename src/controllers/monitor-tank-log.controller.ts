// MODULES
import Route from "@harrypoggers25/route";

// CONFIGS
import { db, MonitorTankLog } from "../configs/db.config";

function generateDate(year: number, month: number, day: number): string {
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit', });
}

export const createMonitorTankLogHandler = Route.asyncHandler(async (req, res) => {
    const { mtl_id, mtl_raw_data, mtl_level, mtl_temp, mtl_humidity, mt_id } = req.body;
    const mtl_date = new Date();

    const mtl = await MonitorTankLog.create({ mtl_id, mtl_raw_data, mtl_level, mtl_temp, mtl_humidity, mtl_date, mt_id });
    if (!mtl) throw new Error('Failed to create new monitor tank log');

    res.status(201).json(mtl);
});

export const findAllMonitorTankLogHandler = Route.asyncHandler(async (req, res) => {
    const mtls = await MonitorTankLog.find();
    if (!mtls) throw new Error(`Failed to find all monitor tank logs`);

    res.status(200).json(mtls);
});

export const findAllMonitorTankLogByDateHandler = Route.asyncHandler(async (req, res) => {
    if (['mtl_year', 'mtl_month'].some(param => Number.isNaN(+req.params[param]))) {
        res.status(400);
        throw new Error(`Failed to find all monitor tanks by date [${req.params.mtl_year},${req.params.mtl_month}]`);
    }

    const [year, month] = [+req.params.mtl_year, +req.params.mtl_month];
    const mtls = await MonitorTankLog.find({
        where: `mtl_date >= DATE '${generateDate(year, month, 1)}' AND mtl_date <  DATE '${generateDate(year, month + 1, 1)}'`,
        orderBy: { mtl_id: 'ASC' }
    });
    if (!mtls) throw new Error(`Failed to find all monitor tank logs [${year},${month}]`);

    res.status(200).json(mtls);
});

export const deleteMonitorTankLogHandler = Route.asyncHandler(async (req, res) => {
    const mtl_id = +req.params.mtl_id;
    const mtl = await MonitorTankLog.deleteByPk(mtl_id);
    if (!mtl) throw new Error(`Failed to delete monitor tank log [${mtl_id}]`);

    res.status(200).json(mtl);
});
