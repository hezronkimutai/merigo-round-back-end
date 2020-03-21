import responseHandler from "../helpers/responseHandler";
import db from "../database/models";
import scripts from "../scripts";
import bcrypt from "bcrypt";
const { users } = db;
import { signToken } from "../helpers/jwtAuth";

export const signInController = async (req, res) => {  
  const { password, ...tokenData } = req.user.dataValues;  
  responseHandler(req, res, "Signin successful", 201, signToken(tokenData));
};
export const signUpController = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const { createUserQuery } = scripts(req);
  const result = await users.create(createUserQuery);
  const { password, ...tokenData } = result.dataValues;
  responseHandler(
    req,
    res,
    "Successfully created an account",
    201,
    signToken(tokenData)
  );
};
export const getUsersController = async (req, res) => {
  const results = await users.findAll();
  responseHandler(req, res, "Users fetched successfully", 200, results);
};
export const getUserController = async (req, res) => {
  const { getUserQuery } = scripts(req);
  const results = await users.findOne(getUserQuery);
  responseHandler(req, res, "User fetched successfully", 200, results);
};
