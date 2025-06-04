const { sendErrorResponse } = require("../helpers/send_error_response");

const User = require("../schemas/user.schema");

const add = async (req, res) => {
  try {
    const {} = req.body;

    const newUser = await User.create({});
    res.status(201).send({ message: "New user created!", newUser });
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getAll = async (req, res) => {
  try {
    const userss = await User.findAll();
    res.status(200).send(userss);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getById = async (req, res) => {
  try {
    let { id } = req.params;
    const userss = await User.findByPk(id);
    res.status(200).send(userss);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const remove = async (req, res) => {
  try {
    let { id } = req.params;
    const userss = await User.destroy({ where: { id } });
    res.status(200).send(userss);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const update = async (req, res) => {
  try {
    const userss = await User.update(
      { ...req.body },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    res.status(200).send(userss);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

module.exports = { add, getAll, getById, remove, update };
