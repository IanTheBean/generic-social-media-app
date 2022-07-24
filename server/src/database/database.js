const fs = require("fs");
const path = require("path");
class DataBase {
  Accounts = {};
  Posts = {};

  constructor() {
    this.READ_ACCOUNTS();
    this.READ_POSTS();
  }

  READ_ACCOUNTS = () => {
    fs.readFile(
      path.resolve(__dirname, "Accounts.json"),
      "utf8",
      (err, data) => {
        console.log();
        if (!err) {
          this.Accounts = JSON.parse(data);
        }
      }
    );
  };

  READ_POSTS = () => {
    fs.readFile(path.resolve(__dirname, "Posts.json"), "utf8", (err, data) => {
      console.log();
      if (!err) {
        this.Posts = JSON.parse(data);
      }
    });
  };

  GET_ACCOUNT = (username) => {
    return this.Accounts[username];
  };

  GET_POSTS = (index, amount) => {
    return Object.values(this.Posts).slice(index, index + amount);
  };
}

module.exports = DataBase;
