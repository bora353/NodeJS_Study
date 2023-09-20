const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

// HTTP 메소드 : 요청의 목적, 종류 알리는 수단
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  console.log(name);

  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else if (name == "pig") {
    res.json({ sound: "꿀꾸르" });
  }
});

app.get("/user/:id", function (req, res) {
  res.json({ sound: "야옹" });
});

app.listen(3000);
