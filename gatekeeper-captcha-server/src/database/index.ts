import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1/gatekeeper_captcha")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));
