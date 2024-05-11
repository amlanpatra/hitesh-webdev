const express = require("express");

const app = express();


const port = 8000

app.get("/login",(req,res) => {

  return res.send("This is the login route")
})

app.get("/",(req,res) => {

  return res.send("This is the first")
})


app.listen(port, () => {
  console.log("Server is up and running.")
})




/*













const port = 8000;

app.get("/", (req, res) => {
  return res.send("Home page");
});

app.get("/login", (req, res) => {
  return res.send("You are visiting login route");
});

app.get("/logout", (req, res) => {
  return res.send("You are visiting logout route");
});

app.listen(port, () => {
  console.log("Server is up and running...");
});
*/