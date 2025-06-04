const router = require("express").Router();

const {
  add,
  getAll,
  getById,
  remove,
  update,
} = require("../controllers/user.controller");

router.get("/", getAll);
router.post("/", add);
router.get("/:id", getById);
router.delete("/:id", remove);
router.post("/:id", update);

module.exports = router;
