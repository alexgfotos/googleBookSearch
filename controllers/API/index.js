const router = require("express").Router();
// Import our controllers
const bookRoutes = require("./booksController.js");
const authorRoutes = require("./authorsController.js");


// Hook up to the router
router.use("/books", bookRoutes);
router.use("/authors", authorRoutes);

// Export the router
module.exports = router;
