import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../index";
import {
  validSignupData,
  validSigninData,
  inValidSignupData,
  inValidSignupDataResponse,
  inValidSigninData
} from "./mock/auth";

chai.use(chaiHttp);
chai.should();
const { expect } = chai;

let loggedInUserToken;
describe("Test users route", () => {
  before(done => {
    chai
      .request(app)
      .post("/api/v1/auth/signin")
      .send(validSigninData)
      .end((err, res) => {
        loggedInUserToken = res.body.data;
        done();
      });
  });
  it("fetch all users succesfully", done => {
    chai
      .request(app)
      .get("/api/v1/users")
      .set({ token: loggedInUserToken })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("fetch all users using the wrong token", done => {
    chai
      .request(app)
      .get("/api/v1/users")
      .set({ token: "invalidtoken" })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});
