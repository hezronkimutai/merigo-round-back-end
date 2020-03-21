import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import responseHandler from "../helpers/responseHandler";

dotenv.config();

export const signToken = data => {
  const token = jwt.sign(data, process.env.JWT_KEY);
  return token;
};

export const verifyToken = (req, res, next) => {
  const token = !req.headers.token ? req.params.token : req.headers.token;
  if (!token) {
    return responseHandler(req, res, "Please, insert the token", 401);
  }
  jwt.verify(token, process.env.JWT_KEY, async (err, result) => {
    if (err) {
      return responseHandler(req, res, err, 401);
    }
    req.user = result;
    result.token = token;
    next();
  });
};
