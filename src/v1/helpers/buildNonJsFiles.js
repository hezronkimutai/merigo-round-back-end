import fs from "fs";
import config from "../database/config.json";

export const buildNonJs = () => {
  fs.writeFile("dist/v1/database/config.json", JSON.stringify(config), err => {
    if (err) throw err;
  });
};
require("make-runnable");
