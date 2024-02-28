const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const express = require("express");
const connection = require("./Config/DBConnection");
const userRouter = require("./Routes/userRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Deployeddd!");
});

app.listen(PORT, () => {
  connection();
  console.log(`Server is Running on ${PORT}!`);
});
