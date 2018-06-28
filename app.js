import express from "express";
import bodyParser from "body-parser";
import connectToDb from "./db";

require("dotenv").config();
const app = express();

/* Your code */
// registration
// login
// logout
connectToDb();
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  try {
    res.status(201).send({});
  } catch (error) {
    res.status(401).send("Registration Error");
  }
});

app.post("/api/login", async (req, res) => {});

app.get("/api/logout", async (req, res) => {});

app.listen(process.env.EXPRESS_PORT || 8080, () =>
  console.log(
    `Express Server is running on ${process.env.EXPRESS_PORT || 8080}`
  )
);

module.exports = app;
