import responseHandler from "../helpers/responseHandler";
import db from "../database/models";
import scripts from "../scripts";

const { users } = db;

export const checkUserConflict = async (req, res,next) => {
  const results = await users.findOne(scripts(req).checkUserConflictQuery);
  return results
    ? responseHandler(
        req,
        res,
        "A user with the same details exists",
        409,
      )
    : next();
};
