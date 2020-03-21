export const validSignupData = {
  firstName: "john",
  lastName: "Doe",
  email: "example@example.com",
  phoneNumber: "0000000000",
  password: "OjzH$#@123$"
};
export const inValidSignupData = {
  firstName: 34,
  lastName: 19,
  email: "exampl.com",
  phoneNumber: "0000000",
  password: "O"
};
export const inValidSignupDataResponse = [
  "first name should be valid",
  "last name should be valid",
  "A valid phone number should be numeric and should have a lenght of 10",
  "email should be valid",
  "A valid password should have a character, number, UPPERC CASE letter and a lower case letter and should be longer than 8"
];
export const validSigninData = {
  email: "example@example.com",
  password: "OjzH$#@123$"
};
export const inValidSigninData = {
  email: "example@example.com",
  password: "OjzH$#@12"
};
