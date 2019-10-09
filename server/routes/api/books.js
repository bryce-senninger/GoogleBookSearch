const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").post(booksController.create);

router
  .route("/")
  .get(bookshelfController.findAll)
  .post(bookshelfController.create);

router.route("/:id").delete(bookshelfController.delete);

module.exports = router;
