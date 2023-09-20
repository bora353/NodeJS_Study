//npm i mysql

const express = require("express");
const app = express();
var mysql = require("mysql");

const server = app.listen(3000, () => {
  console.log("Start Server : localhost:3000");
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "wpf",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("연결되었어!!");

  connection.query(" select * from users;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

app.get("/db", function (req, res) {
  const query = "select * from users";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("쿼리 실행 오류 : ", err);
      return res.status(500).send("db 오류 발생");
    }

    res.json(results);
  });
});
