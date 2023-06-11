const router = require('express').Router();

const data = require("./sample-data.js");

router.get('/', (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data.sample_path_1.get));
});

module.exports = router;
