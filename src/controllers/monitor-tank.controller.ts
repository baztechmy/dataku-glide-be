// MODULES
import Route from "@harrypoggers25/route";

// CONFIGS
import { MonitorTank } from "../configs/db.config";

export const createMonitorTankHandler = Route.asyncHandler(async (req, res) => {
    const { mt_id, mt_name, mt_height, mt_diameter, mt_topic, sensor_ids, gateway_id } = req.body;
    const monitorTank = await MonitorTank.create({ mt_id, mt_name, mt_height, mt_diameter, mt_topic, sensor_ids, gateway_id });
    if (!monitorTank) throw new Error('Failed to create new monitor tank');

    res.status(201).json(monitorTank);
});

export const findMonitorTankHandler = Route.asyncHandler(async (req, res) => {
    const mt_id = +req.params.mt_id;
    const monitorTank = await MonitorTank.findByPk(mt_id);
    if (!monitorTank) throw new Error(`Failed to find monitor tank [${mt_id}]`);

    res.status(200).json(monitorTank);
});

export const findAllMonitorTankHandler = Route.asyncHandler(async (req, res) => {
    const monitorTanks = await MonitorTank.find();
    if (!monitorTanks) throw new Error(`Failed to find all monitorTanks`);

    res.status(200).json(monitorTanks);
});

export const updateMonitorTankHandler = Route.asyncHandler(async (req, res) => {
    const mt_id = +req.params.mt_id;
    const { mt_name, mt_height, mt_diameter, mt_topic, sensor_ids, gateway_id } = req.body;

    const monitorTank = await MonitorTank.updateByPk(mt_id, { mt_name, mt_height, mt_diameter, mt_topic, sensor_ids, gateway_id });
    if (!monitorTank) throw new Error(`Failed to update monitor tank [${mt_id}]`);

    res.status(200).json(monitorTank);
});

export const deleteMonitorTankHandler = Route.asyncHandler(async (req, res) => {
    const mt_id = +req.params.mt_id;
    const monitorTank = await MonitorTank.deleteByPk(mt_id);
    if (!monitorTank) throw new Error(`Failed to delete monitor tank [${mt_id}]`);

    res.status(200).json(monitorTank);
});
