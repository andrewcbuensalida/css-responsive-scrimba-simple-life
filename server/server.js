const express = require("express");

const app = express();

app.use(express.static("../client/public"));

app.get("/api/v1/", (req, res) => res.json({ date: Date.now() - 10000 }));

app.listen("3100", () => console.log(`listening to port 3100`));
