const express = require('express');
const cors = require('cors');
const routes = require('../Routes');
require('dotenv-safe').config();
require('../Data/Connection');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333);