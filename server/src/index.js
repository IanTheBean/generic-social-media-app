const express = require("express");
const app = express();

const HOSTNAME = "localhost";
const PORT = 3000;

app.listen(3000, () => {
  console.log(`Server started at http://${HOSTNAME}:${PORT}`);
});

// app.get("/url", (req, res, next) => {
//   res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
// });
