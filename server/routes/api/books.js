const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").post(booksController.create);

router
  .route("/saved")
  .get(booksController.findAll)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
