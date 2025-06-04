const { sendErrorResponse } = require("../helpers/send_error_response");
const User_role = require("../schemas/user-role.schema");

const add = async (req, res) => {
  try {
    const { userId, role_id } = req.body;

    const User_role = await User_role.findByPk(role_id);
    if (!User_role) {
      return sendErrorResponse(
        { message: "Bunday User_role mavjud emas" },
        res,
        400
      );
    }
    const user = await User_role.findByPk(userId);
    if (!user) {
      return sendErrorResponse(
        { message: "Bunday user mavjud emas" },
        res,
        400
      );
    }

    const newUser_role = await User_role.create({ userId, role_id });
    res.status(201).send({ message: "New User_role created!", newUser_role });
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getAll = async (req, res) => {
  try {
    const User_roless = await User_role.findAll();
    res.status(200).send(User_roless);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getById = async (req, res) => {
  try {
    let { id } = req.params;
    const User_roless = await User_role.findByPk(id);
    res.status(200).send(User_roless);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const remove = async (req, res) => {
  try {
    let { id } = req.params;
    const User_roless = await User_role.destroy({ where: { id } });
    res.status(200).send(User_roless);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const update = async (req, res) => {
  try {
    const User_roless = await User_role.update(
      { ...req.body },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    res.status(200).send(User_roless);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

module.exports = { add, getAll, getById, remove, update };
