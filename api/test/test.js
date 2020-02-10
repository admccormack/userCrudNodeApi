import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the user endpoints:', () => {
    it('It should create a user', (done) => {
      const user = {
        title: 'Mr',
        firstName: 'test',
        lastname: 'McTest'
      };
      chai.request(app)
        .post('/api/v1/users')
        .set('Accept', 'application/json')
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.data).to.include({
            id: 1,
            title: user.title,
            firstName: user.firstName,
            lastName: user.lastName,
          });
          done();
        });
    });
  
    it('It should not create a user with incomplete parameters', (done) => {
      const user = {
        title: 'Mr',
        firstName: 'test'
      };
      chai.request(app)
        .post('/api/v1/users')
        .set('Accept', 'application/json')
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });
  
    it('It should get all users', (done) => {
      chai.request(app)
        .get('/api/v1/users')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          res.body.data[0].should.have.property('id');
          res.body.data[0].should.have.property('title');
          res.body.data[0].should.have.property('firstName');
          res.body.data[0].should.have.property('lastName');
          done();
        });
    });

});
