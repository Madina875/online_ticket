const { sendErrorResponse } = require("../helpers/send_error_response");

const add = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newRole = await Role.create({ name, description });
    res.status(201).send({ message: "New role created!", newRole });
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getAll = async (req, res) => {
  try {
    const reles = await Role.findAll();
    res.status(200).send(reles);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getById = async (req, res) => {
  try {
    let { id } = req.params;
    const reles = await Role.findByPk(id);
    res.status(200).send(reles);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const remove = async (req, res) => {
  try {
    let { id } = req.params;
    const reles = await Role.destroy({ where: { id } });
    res.status(200).send(reles);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const update = async (req, res) => {
  try {
    const reles = await Role.update(
      { ...req.body },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    res.status(200).send(reles);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

module.exports = { add, getAll, getById, remove, update };
