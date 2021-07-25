const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  res.send("Aries Dimas Y");
});

app.get("/contact", (req, res) => {
  //res.send("Contact Page")
  res.json({
    name: "Aries Dimas Yudhistira",
    email: "ariesdimasy@gmail.com",
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404 Not Found");
}); // middleware

app.listen(port, () => {
  console.log(` this api listen to port ${port}`);
});
