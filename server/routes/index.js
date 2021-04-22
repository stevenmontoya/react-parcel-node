const router = require("express").Router();
const User = require("../User");
const crudController = require("../crudController");

router.get("/", crudController.getAll(User));
router.post("/", crudController.create(User));

module.exports = router;
