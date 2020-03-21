import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../index";

chai.use(chaiHttp);
chai.should();
const { expect } = chai;

describe("Welcome to home", () => {
  it("landing page", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("Non existent route", done => {
    chai
      .request(app)
      .get("/not")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it("test error handling", done => {
    chai
      .request(app)
      .get("/api/v1/error")
      .end((err, res) => {
        res.should.have.status(500);
        expect(res.body.message).eql("Server error");
        done();
      });
  });
});
