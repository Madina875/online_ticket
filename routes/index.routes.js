const userRouter = require("./user.route");
const roleRouter = require("./role.route");
const authRouter = require("./auth.routes");
const busRouter = require("./bus.route");
const regionRouter = require("./region.routes");
const districtRouter = require("./district.route");
const driverRouter = require("./drivers.route");
const busesRouter = require("./buses.route");

const router = require("express").Router();

router.use("/author", authRouter);
router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/district", districtRouter);
router.use("/drivers", driverRouter);
router.use("/region", regionRouter);
router.use("/busd", busRouter);
router.use("/bus", busesRouter);
