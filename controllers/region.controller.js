const { sendErrorResponse } = require("../helpers/send_error_response");
const Region = require("../schemas/region.schema");

const add = async (req, res) => {
  try {
    const { name } = req.body;

    const newRegion = await Region.create({ name });
    res.status(201).send({ message: "New region created!", newRegion });
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getAll = async (req, res) => {
  try {
    const regions = await Region.findAll();
    res.status(200).send(regions);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const getById = async (req, res) => {
  try {
    let { id } = req.params;
    const regions = await Region.findByPk(id);
    res.status(200).send(regions);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const remove = async (req, res) => {
  try {
    let { id } = req.params;
    const regions = await Region.destroy({ where: { id } });
    res.status(200).send(regions);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

const update = async (req, res) => {
  try {
    const regions = await Region.update(
      { ...req.body },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    res.status(200).send(regions);
  } catch (error) {
    sendErrorResponse(error, res, 400);
  }
};

module.exports = { add, getAll, getById, remove, update };
