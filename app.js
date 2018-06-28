import express from "express";
import bodyParser from "body-parser";
import connectToDb from "./db";
import registerUser from "./registerUser";
import loginUser from "./loginUser";

import dotenv from "dotenv";

dotenv.config();
const app = express();

/* Your code */
// registration
// login
// logout
connectToDb();
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  try {
    const token = await registerUser(req.body);
    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send("Registration Error");
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.status(200).send({ token });
  } catch (error) {
    res.status(401).send({ Error: "Authentication Error" });
  }
});

app.get("/api/logout", async (req, res) => {});

app.listen(process.env.EXPRESS_PORT || 8080, () =>
  console.log(
    `Express Server is running on ${process.env.EXPRESS_PORT || 8080}`
  )
);

module.exports = app;
