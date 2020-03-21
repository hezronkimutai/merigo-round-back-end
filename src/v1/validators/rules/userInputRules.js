import { check } from "express-validator";

export const signUpRules = () => [
  check("firstName", "first name should be valid").isAlpha(),
  check("lastName", "last name should be valid").isAlpha(),
  check("phoneNumber", "A valid phone number should be numeric and should have a lenght of 10")
    .isNumeric()
    .isLength({ min: 10, max: 10 }),
  check("email", "email should be valid")
    .trim()
    .isEmail(),
  check(
    "password",
    "A valid password should have a character, number, UPPERC CASE letter and a lower case letter and should be longer than 8"
  ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
];
