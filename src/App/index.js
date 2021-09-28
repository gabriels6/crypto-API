const express = require('express');
const cors = require('cors');
const Routes = require('../Routes');
require('dotenv-safe').config();
require('../Data/Connection');

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);
app.listen(process.env.PORT || 3333);