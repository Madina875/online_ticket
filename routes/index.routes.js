const userRouter = require("../routes/user.route");
const roleRouter = require("../routes/role.route");
const authRouter = require("../routes/auth.route");
const busRouter = require("../routes/bus.route");
const regionRouter = require("../routes/region.routes");
const districtRouter = require("../routes/district.route");
const driverRouter = require("../routes/drivers.route");
const busesRouter = require("../routes/buses.route");

const router = require("express").Router();

router.use("/author", authRouter);
router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/district", districtRouter);
router.use("/drivers", driverRouter);
router.use("/region", regionRouter);
router.use("/busd", busRouter);
router.use("/bus", busesRouter);
