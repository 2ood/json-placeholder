const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const BASEPATH_DUMMY_API="/api";
const router_what_should_i_buy = require('./api/what-should-i-buy');

app.use(BASEPATH_DUMMY_API+"/what-should-i-buy",router_what_should_i_buy);

app.listen(port,() => {
    console.log(`Example app listening on ${port}`);
});