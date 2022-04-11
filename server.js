const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.get("/api/get_code", (req, res) => {
  res.send({
    codePin: "0000",
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
