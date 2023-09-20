// npm i express
// npm i ejs

const express = require("express");
const app = express();

const server = app.listen(3000, () => {
  console.log("Start Server : localhost:3000");
});

// 템플릿 파일 위치한 디렉토리 지정
app.set("views", __dirname + "/views");
// 템플릿 엔진 설정 (여기서는 ejs)
// ejs : html에서 자바스크립트 같이 쓸 수 있는 엔진
app.set("view engine", "ejs");
// html 파일을 뷰로 렌더링 시에도 EJS 엔진 활용
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("index.html"); //set에 정의되어 있는 것 가져옴
});

app.get("/about", function (req, res) {
  res.render("about.html");
});
