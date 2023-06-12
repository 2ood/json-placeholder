const router = require('express').Router();

const controller = require("./controllers");

//adding swagger api-docs
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swagger_options = require("./swagger/swagger-options.js");
const specs = swaggerJsdoc(swagger_options);

router.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs));
router.use("/",controller);

module.exports = router;
