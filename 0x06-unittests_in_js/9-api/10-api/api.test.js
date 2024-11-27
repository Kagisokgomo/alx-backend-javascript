const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  let server;

  before(function (done) {
    server = require('./api');
    done();
  });

  after(function (done) {
    server.close(done);
  });

  it('should return status code 200 for the index page', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function () {
  it('should return status code 200 for a valid cart ID (number)', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for an invalid cart ID (non-numeric)', function (done) {
    request('http://localhost:7865/cart/hello', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      expect(body).to.include('Cannot GET /cart/hello');
      done();
    });
  });

  it('should return status code 404 for a missing cart ID', function (done) {
    request('http://localhost:7865/cart/', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments', function () {
  it('should return status code 200 and the correct payment methods object', function (done) {
    request('http://localhost:7865/available_payments', function (error, response, body) {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('Login', function () {
  it('should return status code 200 and a welcome message with the correct username', function (done) {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' }
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return status code 400 if the username is missing', function (done) {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {}  // Missing userName
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Missing username');
      done();
    });
  });
});
