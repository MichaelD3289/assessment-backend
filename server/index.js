const express = require("express");
const cors = require("cors");
const cntrl = require('./controller')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", cntrl.getCompliment);

app.get('/api/fortunes', cntrl.getFortunes);
app.post('/api/fortunes', cntrl.addFortune);
app.delete('/api/fortunes/', cntrl.deleteFortune);
app.get('/api/users/', cntrl .getUser);
app.put('/api/users/', cntrl.updateUser);

app.listen(4000, () => console.log("Server running on 4000"));
