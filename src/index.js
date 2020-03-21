import express from "express";
import bodyParser from "body-parser";
import v1 from "./v1";
import responseHandler from "./v1/helpers/responseHandler";
import passport from "./v1/services/localStrategy";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
  done(null, user);
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));
app.use("/api", v1);
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "success"
  });
});

app.use((req, res, next) =>
  next({
    status: 404,
    message: "The url you requested is currently unavaillable"
  })
);
app.use((err, req, res, next) =>
  responseHandler(req, res, err.message, err.status || 500)
);
app.listen(port, () => console.log("Lost and found listening to port 3000"));

export default app;
