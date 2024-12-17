import express from "express";
import router from './router';
import bodyParser from 'body-parser';

const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});

app.use('/', router());