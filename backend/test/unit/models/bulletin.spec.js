'use strict';
const expect=require('assert')


describe('models/bulletin', function () {
  
  beforeEach(function () {
    this.bulletin = require('../../../DAL/models').bulletin;
    this.comment = require('../../../DAL/models').comment;
  });

  describe('create', function () {
    it('creates a bulletin', function () {

      return this.bulletin.create({ title:'test title',content:'test content',logoImg:'92d679a0-0b08-40b1-917b-9acaa12ed92c.png' }).bind(this).then(function (bolletin) {

        
        return this.comment.create({ content: 'test comment',user:"mregydev",bulletinId:bolletin.id  }).then(function (comment) {

          expect.equal(comment.user,'mregydev');
          
        });
      });
    });
  });
});
