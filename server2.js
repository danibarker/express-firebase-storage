const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("Test");
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/html*", (req, res) => {
  console.log("first");
  res.send("<h1>Hello World</h1>");
});

app.listen(3001, () => {
  console.log("Server running on port 3000");
});
