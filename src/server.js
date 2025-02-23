require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./routes/user.route");
app.get("/", (req, res) => {
  console.log(test);
  res.send("hello");
});
app.use("/user", userRouter);
app.use((req, res, next) => {
  //   const error = new Error("404 NOT FOUND");
  //   error.status = 404;
  next(createError.NotFound("404 NOT FOUND"));
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
    error: error.status || 500,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
