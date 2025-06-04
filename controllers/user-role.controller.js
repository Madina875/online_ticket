const { sendErrorResponse } = require("../helpers/send_error_response");

const add = async (req, res) => {
  try {
    const { userId, roleId } = req.body;

    
    const role = await User_role.findByPk(roleId);
    if (!role) {
      return sendErrorResponse(
        { message: "Bunday role mavjud emas" },
        res,
        400
      );
    }
    const user = await User.findByPk(userId);
    if (!user) {
      return sendErrorResponse(
        { message: "Bunday user mavjud emas" },
        res,
        400
      );
    }


    const newRole = await Role.create({ userId, roleId });
    res.status(201).send({ message: "New role created!", newRole });
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getAll = async (req, res) => {
  try {
    const rolesies = await Role.findAll();
    res.status(200).send(rolesies);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getById = async (req, res) => {
  try {
    let { id } = req.params;
    const rolesies = await Role.findByPk(id);
    res.status(200).send(rolesies);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const remove = async (req, res) => {
  try {
    let { id } = req.params;
    const rolesies = await Role.destroy({ where: { id } });
    res.status(200).send(rolesies);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const update = async (req, res) => {
  try {
    const rolesies = await Role.update(
      { ...req.body },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    res.status(200).send(rolesies);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

module.exports = { add, getAll, getById, remove, update };
