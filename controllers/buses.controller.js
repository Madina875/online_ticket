const { sendErrorResponse } = require("../helpers/send_error_response");
const Busd = require("../schemas/buses.schema");

const add = async (req, res) => {
  try {
    const { number_place, seat_count, model } = req.body;

    const newBusd = await Busd.create({
      number_place,
      seat_count,
      model,
    });
    res.status(201).send({ message: "New Busd created!", newBusd });
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getAll = async (req, res) => {
  try {
    const bus = await Busd.findAll();
    res.status(200).send(bus);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getById = async (req, res) => {
  try {
    let { id } = req.params;
    const bus = await Busd.findByPk(id);
    res.status(200).send(bus);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const remove = async (req, res) => {
  try {
    let { id } = req.params;
    const bus = await Busd.destroy({ where: { id } });
    res.status(200).send(bus);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const update = async (req, res) => {
  try {
    const bus = await Busd.update(
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
