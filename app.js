const express = require('express');
const app = express();

const BASEPATH_DUMMY_API="/api";
const router_what_should_i_buy = require('./api/what-should-i-buy');

app.use(BASEPATH_DUMMY_API+"/what-should-i-buy",router_what_should_i_buy);

app.listen(process.env.PORT || 3000);