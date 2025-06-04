const { sendErrorResponse } = require("../helpers/send_error_response");
const Bus = require("../schemas/bus.schema");

const add = async (req, res) => {
  try {
    const { name, seat_count, model } = req.body;

    const newBus = await Bus.create({ name, seat_count, model });
    res.status(201).send({ message: "New Bus created!", newBus });
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getAll = async (req, res) => {
  try {
    const bus = await Bus.findAll();
    res.status(200).send(bus);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getById = async (req, res) => {
  try {
    let { id } = req.params;
    const bus = await Bus.findByPk(id);
    res.status(200).send(bus);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const remove = async (req, res) => {
  try {
    let { id } = req.params;
    const bus = await Bus.destroy({ where: { id } });
    res.status(200).send(bus);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const update = async (req, res) => {
  try {
    const bus = await Bus.update(
      { ...req.body },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    res.status(200).send(bus);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

module.exports = { add, getAll, getById, remove, update };
