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
let token;
describe("Test authentication", () => {
  it("signup valid data ", done => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(validSignupData)
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body.message).eql("Successfully created an account");
        done();
      });
  });
  it("signup existing user", done => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(validSignupData)
      .end((err, res) => {
        res.should.have.status(409);
        expect(res.body.message).eql("A user with the same details exists");
        done();
      });
  });
  it("signup invalid", done => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(inValidSignupData)
      .end((err, res) => {
        res.should.have.status(400);
        expect(res.body.message).eql(inValidSignupDataResponse);
        done();
      });
  });
  it("signin valid data ", done => {
    chai
      .request(app)
      .post("/api/v1/auth/signin")
      .send(validSigninData)
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body.message).eql("Signin successful");
        done();
      });
  });
  it("signin valid data ", done => {
    chai
      .request(app)
      .post("/api/v1/auth/signin")
      .send(inValidSigninData)
      .end((err, res) => {
        token = res.body.data;
        res.should.have.status(401);
        done();
      });
  });
});

export const userToken = token;
