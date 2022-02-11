const express = require("express");
const cors = require("cors");
const cntrl = require('./controller')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", cntrl.getCompliment);

app.listen(4000, () => console.log("Server running on 4000"));
