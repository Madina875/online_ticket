const userRouter = require("./user.route");
const roleRouter = require("./role.route");
const authRouter = require("./auth.routes");

const router = require("express").Router();

router.use("/author", authRouter);
router.use("/user", userRouter);
router.use("/role", roleRouter);
