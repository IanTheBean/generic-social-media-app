const DataBase = require("./database/database");
const DB = new DataBase();
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());

const HOSTNAME = "localhost";
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server started at http://${HOSTNAME}:${PORT}`);
});

app.get("/login/:username/:password", (req, res, next) => {
  const Account = DB.GET_ACCOUNT(req.params.username);
  if (Account) {
    if (Account.password == req.params.password) {
      res.json({ response: { data: Account, status: "success" } });
    } else {
      res.json({ response: { data: null, status: "incorrect password" } });
    }
  } else {
    res.json({ response: { data: null, status: "account does not exist" } });
  }
});
