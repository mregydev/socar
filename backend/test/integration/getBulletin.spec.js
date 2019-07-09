'use strict';

const app = require('../../app');
const request = require('supertest');
const expect = require('assert')
describe('comment creation page', function () {

  beforeEach(function () {
    this.models = require('../../DAL/models');
  })

  it('loads correctly', function (done) {
    request(app).get('/v1/bulletin/getAllBulletins').expect(200, done);
  });

  it('get bulletin correcltly', function (done) {
    this.models.bulletin.create({ content: 'test', title: 'egydev title', logoImg: 'erem3424.png' }).then(async function (bulletin) {

      let res = await request(app).get(`/v1/bulletin/getBulletin/${bulletin.id}`)
      expect.equal(res.body.Result.title, 'egydev title')
      done()
    })
  });

});
