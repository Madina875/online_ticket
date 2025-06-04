const { sendErrorResponse } = require("../helpers/send_error_response");
const Driver = require("../schemas/drivers.schema");

const add = async (req, res) => {
  try {
    const { name, phone_number } = req.body;

    const newDriver = await Driver.create({ name, phone_number });
    res.status(201).send({ message: "New driver created!", newDriver });
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getAll = async (req, res) => {
  try {
    const drivers = await Driver.findAll();
    res.status(200).send(drivers);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getById = async (req, res) => {
  try {
    let { id } = req.params;
    const drivers = await Driver.findByPk(id);
    res.status(200).send(drivers);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const remove = async (req, res) => {
  try {
    let { id } = req.params;
    const drivers = await Driver.destroy({ where: { id } });
    res.status(200).send(drivers);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const update = async (req, res) => {
  try {
    const drivers = await Driver.update(
      { ...req.body },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    res.status(200).send(drivers);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

module.exports = { add, getAll, getById, remove, update };
