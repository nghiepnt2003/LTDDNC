const express = require("express");
const categoryController = require("../app/controllers/CategoryController");
const router = express.Router();

router.get("/:id", categoryController.getById);
router.get("/", categoryController.categoryController.getAll);
router.post("/store", categoryController.store);
router.put("/:id", categoryController.update);
router.delete("/:id/force", categoryController.forceDelete);
router.delete("/:id", categoryController.delete);
router.patch("/:id/restore", categoryController.restore);

module.exports = router;
