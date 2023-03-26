//might just use an API for sending contact form email and not have my own backend

const PORT = 8000;
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`port is ${PORT}`))