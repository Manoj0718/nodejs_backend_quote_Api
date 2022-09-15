const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.get("/quotes/random", controllers.randomQutes);
router.get("/quotes", controllers.getAllQuotes);
router.post("/quotes", controllers.createQuotes);

module.exports = router;
